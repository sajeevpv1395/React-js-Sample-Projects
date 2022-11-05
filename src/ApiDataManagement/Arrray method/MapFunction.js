import React from 'react'


function MapFunction() {

    const items=[
    
        {name:"biriyani", price:"100"},
        {name:"dosa", price:"110"},
        {name:"idalli", price:"90"},
        {name:"chapathi", price:"50"},
        {name:"kuska", price:"200"},
        {name:"chicken", price:"150"},
        {name:"mutton", price:"70"},
        {name:"pork", price:"60"},
        {name:"meals", price:"400"},
        {name:"porotta", price:"10"},
        {name:"juice", price:"50"},
        {name:"cofe", price:"10"},
    
        
    ]
    
    console.log(items);
    
    
    // filter method//  
    
    const itemNames = items.filter((item)=>{
        return item.price>=100;
    });
      console.log(itemNames);
    
    
      //---------------------//
    
      // map methods  //
    
      const ItemMapData = items.map((item)=>{
        return item.price;
      })
    
      console.log(ItemMapData)
    
    
    
      //--------------------------///
    
    // find method - select array single elements //
    
    
    
    const itemFindData = items.find((item)=>{
         return item.name ==='porotta';
    })
    
    console.log(itemFindData);
    
    //-----------///////
    
    
    
    // for each - list element alteration purpose //
    
    
    items.forEach((item)=>{
     
    
    console.log(item.price +2)
    
    })
    
    
    //---------------//
    
    
    //   some method ----it will return only true or false statement   ----///
    
    
    const itemsomeData = items.some((item)=>{
        return item.price<=100;
    })
    
    console.log(itemsomeData);
    
    
    
    // every mtd =it return true or false ..it check all element if all elemets are satisfy the statement it will return true statement//
    
    
    
    const itemeverydata = items.every((item)=>{
        return item.price>=100;
    
    })
    console.log(itemeverydata);
    
    
    
    // reduce mtd  -reduces the array into single value left to write array   math calculations we can do//
    
     const total = items.reduce((CurrentTotal,item)=>{
        return item.price + CurrentTotal;
     },0);
    
     console.log(total);
    
    
     //  include - check the value inside the array or not it will only return true or false statement...//
    
    
     const listNumbers=[1,2,3,4,5,6,7,8,9];
      console.log(listNumbers.includes(5));


  return (


    <div>











    </div>
    
    
    
    
    
   
  )
}

export default MapFunction