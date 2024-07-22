import Link from 'next/link'
import clsx from 'clsx'

export function DeBankLink() {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6 align-middle lg:mt-0 lg:flex-shrink-0">
      <Link
        href="https://debank.com/official/Bao_Finance/stream"
        aria-label="Follow Bao Finance on DeBank"
        className="flex place-content-center place-items-center space-x-2 rounded-3xl bg-gray-700 px-3.5 py-1.5 text-sm font-semibold text-baoWhite shadow-sm duration-200 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <svg width="20px" height="32px" viewBox="0 0 28 32">
          <g
            id="sidebar"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="mini-sidebar" transform="translate(-30.000000, -98.000000)">
              <g id="sidebar-small" transform="translate(0.000000, 78.000000)">
                <g id="logo-mini" transform="translate(30.000000, 20.000000)">
                  <path
                    d="M27.9552,22.2455172 C27.9552,27.5108858 23.6227491,31.7793103 18.2784,31.7793103 L4.06785716e-13,31.7793103 L4.06785716e-13,25.4234483 L18.2784,25.4234483 C20.0598497,25.4234483 21.504,24.0006401 21.504,22.2455172 C21.504,20.4903944 20.0598497,19.0675862 18.2784,19.0675862 L11.8272,19.0675862 L11.8272,12.7117241 L18.2784,12.7117241 C20.0598497,12.7117241 21.504,11.2889159 21.504,9.5337931 C21.504,7.77867026 20.0598497,6.35586207 18.2784,6.35586207 L4.06785716e-13,6.35586207 L4.06785716e-13,1.21787025e-11 L18.2784,1.21787025e-11 C23.6227491,1.21787025e-11 27.9552,4.26842456 27.9552,9.5337931 C27.9552,11.9755705 27.0234739,14.2029476 25.4911851,15.8896552 C27.0234739,17.5763627 27.9552,19.8037398 27.9552,22.2455172 Z"
                    id="Path"
                    fill="#FE815F"
                    opacity="0.800000012"
                  ></path>
                  <path
                    d="M2.13162821e-14,25.4234483 L15.6992587,25.4234483 C12.3645242,29.2828761 7.05522653,31.7793103 1.0752,31.7793103 C0.714260958,31.7793103 0.355765394,31.7702158 2.13162821e-14,31.7522759 L2.13162821e-14,25.4234483 L2.13162821e-14,25.4234483 Z M18.9879658,19.0675862 L12.9024,19.0675862 L12.9024,12.7117241 L18.9879658,12.7117241 C19.227734,13.7385452 19.3536,14.8013224 19.3536,15.8896552 C19.3536,16.977988 19.227734,18.0407651 18.9879658,19.0675862 Z M15.6992587,6.35586207 L1.15818466e-12,6.35586207 L1.15818466e-12,0.0270344512 C0.355765394,0.00909455861 0.714260958,0 1.0752,0 C7.05522653,0 12.3645242,2.4964342 15.6992587,6.35586207 L15.6992587,6.35586207 Z"
                    id="Shape"
                    fill="#000000"
                    fill-rule="nonzero"
                    opacity="0.119999997"
                  ></path>
                  <path
                    d="M3.71258579e-13,1.21929133e-11 C8.90724844,1.21929133e-11 16.128,7.11404094 16.128,15.8896552 C16.128,24.6652694 8.90724844,31.7793103 3.71258579e-13,31.7793103 L3.71258579e-13,25.4234483 C5.34434907,25.4234483 9.6768,21.1550237 9.6768,15.8896552 C9.6768,10.6242866 5.34434907,6.35586207 3.71258579e-13,6.35586207 L3.71258579e-13,1.21929133e-11 Z"
                    id="Path"
                    fill="#FF6238"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <span className="inline justify-center align-middle font-bold">
          Join DeBank
        </span>
      </Link>
    </div>
  )
}