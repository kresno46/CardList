
async function getProducts() {
  const response = await fetch('https://dummyjson.com/products')
  const data = await response.json()
  return data
}

export default async function Home() {
  const products = await getProducts()
  console.log(products)
  return (
      <div className="text-center mt-20">
          <h1>NAMA</h1>
      </div>
  )
}


