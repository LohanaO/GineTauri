import { Link } from 'react-router-dom'

export default function LoginPage(): JSX.Element {
  const goHomeHandle = (): void => {}

  return (
    <div className="flex h-[100vh] px-[25%]" style={{ gridTemplateColumns: 'auto 1fr' }}>
      <div className="flex flex-1 flex-col justify-center gap-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
          width="180"
          height="180"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5" />
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
        </svg>
        <div className="mb-3 text-slate-950 relative min-w-60 flex w-full">
          <input
            type="text"
            required
            className="peer flex-1 bg-transparent px-2 py-1 outline-none duration-200 transition-all ease-linear peer-focus:-translate-y-[0.9rem] 
                            border-b-2 border-b-emerald-700
                            focus:border-b-[.2rem] focus:border-b-indigo-600"
          />
          <span
            className="peer pointer-events-none absolute origin-[0_0] font-semibold top-0 left-2 leading-[2] transition-all duration-200 ease-linear 
                            peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:-translate-x-2 
                            peer-active:-translate-y-3 peer-active:text-xs peer-active:-translate-x-2 
                            peer-valid:-translate-y-3 peer-valid:text-xs peer-valid:-translate-x-2"
          >
            Correo
          </span>
        </div>
        <div className="mb-3 text-slate-950 relative min-w-60 flex w-full">
          <input
            type="password"
            required
            className="peer flex-1 bg-transparent px-2 py-1 outline-none duration-200 transition-all ease-linear peer-focus:-translate-y-[0.9rem] 
                            border-b-2 border-b-emerald-700
                            focus:border-b-[.2rem] focus:border-b-indigo-600"
          />
          <span
            className="peer pointer-events-none absolute origin-[0_0] font-semibold top-0 left-2 leading-[2] transition-all duration-200 ease-linear 
                            peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:-translate-x-2 
                            peer-active:-translate-y-3 peer-active:text-xs peer-active:-translate-x-2 
                            peer-valid:-translate-y-3 peer-valid:text-xs peer-valid:-translate-x-2"
          >
            Contraseña
          </span>
        </div>

        <Link to="/Home">
          <button
            onClick={goHomeHandle}
            className="bg-emerald-300 px-5 py-3 rounded-full m-auto flex"
          >
            Ingresar
          </button>
        </Link>
      </div>
    </div>
  )
}
