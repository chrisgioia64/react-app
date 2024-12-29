import catLogo from './assets/cat.jpeg'

export default function CatImage() {
  return (
    <img src={catLogo} alt="Cat" style={{ width: '100px' }} />
  )
}