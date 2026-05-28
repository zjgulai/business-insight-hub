import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full bg-[#2D2422] text-[#FBF7F3]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-[8rem] pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1 - Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center">
              <span className="font-display text-2xl font-bold text-white">
                Nurture
              </span>
              <span className="font-display text-2xl font-bold text-[#C9A9A1]">
                Link
              </span>
            </Link>
            <p className="font-body text-sm text-[rgba(251,247,243,0.6)] leading-relaxed max-w-[280px]">
              从洞察到产品。母婴AI创新赛道的深度研究。
            </p>
            <div className="flex items-center gap-3 mt-2">
              {/* Social placeholders */}
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-[rgba(251,247,243,0.1)] flex items-center justify-center"
                >
                  <div className="w-4 h-4 rounded-full bg-[rgba(251,247,243,0.3)]" />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div className="flex flex-col gap-4">
            <span className="text-overline text-[rgba(251,247,243,0.4)]">
              探索
            </span>
            <div className="flex flex-col gap-3">
              {[
                { label: '市场洞察', path: '/market' },
                { label: '五大方案', path: '/solutions' },
                { label: '行业案例', path: '/cases' },
                { label: '创新框架', path: '/market#frameworks' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-body text-[0.9375rem] text-[rgba(251,247,243,0.7)] hover:text-white transition-colors duration-200 relative group w-fit"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-white transition-all duration-250 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 - Solutions */}
          <div className="flex flex-col gap-4">
            <span className="text-overline text-[rgba(251,247,243,0.4)]">
              解决方案
            </span>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Heartbeat Cocoon', path: '/solutions/heartbeat' },
                { label: 'DadQuest', path: '/solutions/dadquest' },
                { label: 'SafeBox', path: '/solutions/safebox' },
                { label: 'WarmMom', path: '/solutions/warmmom' },
                { label: 'FamilyBridge', path: '/solutions/familybridge' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-body text-[0.9375rem] text-[rgba(251,247,243,0.7)] hover:text-white transition-colors duration-200 relative group w-fit"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-white transition-all duration-250 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[rgba(251,247,243,0.1)]">
          <p className="font-body text-xs text-[rgba(251,247,243,0.4)] text-center">
            2025 NurtureLink Research. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
