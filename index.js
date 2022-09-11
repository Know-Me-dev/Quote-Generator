   
   
   let btn = document.querySelector('#new-quote')
   let quote = document.querySelector('.quote')
   let person = document.querySelector('.person')
   let currentItem = 0
   const quotes = [
        {
            
        quote: `"You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children."` ,
        person:`―Madeleine L'Engle`
        
   },
        {
            
        quote: `"If you don't have time to read, you don't have the time (or the tools) to write. Simple as that."` ,
        person: `―Stephen King`  
        
   },   {
       
        quote: `"If there's a book that you want to read, but it hasn't been written yet, then you must write it."` ,
        person:`―Toni Morrison`  
        
   },   {
       
        quote: `"One day I will find the right words, and they will be simple."` ,
        person:`―Jack Kerouac`   
        
   },   {
       
        quote: ` “But I am very poorly today & very stupid & I hate everybody & everything. One lives only to make blunders.”` ,
        person:`―Charles Darwin`   
        
   },   {
       
        quote: `"Don't let your happiness depend on something you may lose."` ,
        person: ` —C.S. Lewis`   
        
   },   {
       
        quote: `"Everything is hard before it is easy." ` ,
        person: `—Johann Wolfgang von Goethe`   
        
   },   {
       
        quote: `“Life is never fair, and perhaps it is a good thing for most of us that it is not.”` ,
        person: `—Oscar Wilde`   
        
   },
         {
       
        quote: `"I do the very best I know how - the very best I can, and I mean to keep on doing so until the end."` ,
        person: `―Abraham Lincoln`   
        
   },
   
        {
       
        quote: `"Anyone who has never made a mistake has never tried anything new."` ,
        person: `—Albert Einstein`   
        
   }]
   
   
   function showQuote(per){
        const item = quotes[currentItem]
        quote.innerText = item.quote
        person.innerText = item.person
   }
   
   btn.addEventListener('click' , function(){
       
       currentItem++ 
       if(currentItem > quotes.length -1  ){
           currentItem = 0
       }
       showQuote(currentItem)
      
       
    //   let random = Math.floor(Math.random() * quotes.length)
      
       
    //   quote.innerText = quotes[random].quote
    //   person.innerText = quotes[random].person
       
   })