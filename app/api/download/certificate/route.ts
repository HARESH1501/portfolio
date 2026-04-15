import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const filename = searchParams.get('file')

    if (!filename) {
      return new NextResponse('Filename is required', { status: 400 })
    }

    // Security: Only allow files from certificates directory
    if (!filename.endsWith('.jpg') && !filename.endsWith('.jpeg') && !filename.endsWith('.png')) {
      return new NextResponse('Invalid file type', { status: 400 })
    }

    const filePath = join(process.cwd(), 'public', 'certificates', filename)
    const fileBuffer = await readFile(filePath)

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'public, max-age=0',
      },
    })
  } catch (error) {
    console.error('Error serving certificate:', error)
    return new NextResponse('File not found', { status: 404 })
  }
}
