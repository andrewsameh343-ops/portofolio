import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { site } from '@/data/site'

export const alt = site.seo.title
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  const character = await readFile(join(process.cwd(), 'app/og-character.png'))
  const characterSrc = `data:image/png;base64,${character.toString('base64')}`

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 80px',
        background: 'linear-gradient(135deg, #0a0a12 0%, #14142a 100%)',
        color: '#f4f4f8',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 680 }}>
        <div style={{ fontSize: 30, color: '#d7263d', letterSpacing: 4, textTransform: 'uppercase' }}>
          Portfolio
        </div>
        <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1, marginTop: 16, textTransform: 'uppercase' }}>
          {site.name}
        </div>
        <div style={{ width: 140, height: 8, background: '#d7263d', marginTop: 28, borderRadius: 4 }} />
        <div style={{ fontSize: 34, marginTop: 28, color: '#a0a0b8' }}>{site.roles.join(' · ')}</div>
      </div>
      {/* biome-ignore lint/a11y/useAltText: decorative inside generated image */}
      <img src={characterSrc} width={330} height={600} style={{ marginTop: 60 }} />
    </div>,
    size,
  )
}
