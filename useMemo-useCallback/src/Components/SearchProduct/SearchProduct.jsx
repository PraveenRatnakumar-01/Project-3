import React, {useState, useMemo, useEffect} from 'react'
import './SearchProduct.css'

const SearchProduct = () => {
    const Fruits = ["Apple", "Anar", "Avacado", "Banana", "Cherry", "Lemon", "Apricot", "Pomegranate", "Cantaloupe",
    "Orange", "Mango", "Blackberry", "Blueberry", "Coconut"
    ]
    const [searchItem, setSearchItem] = useState("")

    console.log("Item ==", searchItem)
    useEffect(()=>{
        const i= Fruits.filter((item)=> item.toLowerCase().includes(searchItem.toLowerCase()))
        console.log(i)
    },[searchItem])

    const FilteredFruit = useMemo(()=>{
        return Fruits.filter((item)=> item.toLowerCase().includes(searchItem.toLowerCase()))
    },[searchItem])
  return (
    <div className='page'>
        <h1>Search Fruits</h1>
        <input type="text" placeholder='Enter fruit name here'
        onChange={(e)=> setSearchItem(e.target.value)}
        />
        <div className={`items ${ FilteredFruit.length<5 | searchItem === "" ? "" : "scroll"}`}>
            {searchItem === "" ? null : FilteredFruit.length>0 ? (
            FilteredFruit.map((item, index)=> <p key={index}>{item}</p>)) : <p>No items Found</p>
            }
        </div>
    </div>
  )
}

export default SearchProduct