import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const inter = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todoアプリ',
  description: 'Next.jsとJavaで作成したタスク管理アプリです',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-gray-100`}>
        {children}
      </body>
    </html>
  )
}
