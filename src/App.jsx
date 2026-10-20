import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

const Nama = 'Tongki'
const N = 900
const gayaJudul = { color: '#1F3A5F', fontSize: "20px" }
function App() {
  const jam = 9
  return (<>
    <h1 className="judul" style={gayaJudul}>
      kantin {Nama}
    </h1>
    <p> {jam<12 ? 'Selamat pagi' : 'Selamat siang'}</p>
    <p> saldo awal kartu kantin: Rp {N* 1000}</p>
    <button disabled>Bayar</button>
</>)    
}

export default App