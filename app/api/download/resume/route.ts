import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'resume.pdf')
    const fileBuffer = await readFile(filePath)

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="HARESH_KN_AIML_KPRIET.pdf"',
        'Cache-Control': 'public, max-age=0',
      },
    })
  } catch (error) {
    console.error('Error serving resume:', error)
    return new NextResponse('File not found', { status: 404 })
  }
}
