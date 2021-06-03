
export default function Home() {
  return (
    <div>
        SALUDO={process.env.NEXT_PUBLIC_SALUDO} <br />
        SALUDO2={process.env.NEXT_PUBLIC_SALUDO2} <br />
        SALUDO3={process.env.NEXT_PUBLIC_SALUDO3} <br />
    </div>
  )
}
