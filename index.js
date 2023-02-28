$(document).ready(function(){
    var url = "https://hn.algolia.com/api/v1/search?query=javascript";
    $.getJSON(url, function(data){
        var currQuote="";
        var quotes = data.hits; //array with 20 objects
        
        $('.read').on('click',function(){  // generate
            currQuote = quotes[Math.floor(Math.random()*quotes.length)]; //random generation from length =20
            console.log(currQuote);
            $('.quoteBody').hide();
            $('.quoteBodyLink').html(currQuote.title);
            $('.quoteBodyLink')
            .attr('href',currQuote.url)
            .attr('target','_blank');  // opens the link to a new page
            $('.quoteAuthor').html(currQuote.author);
            $('.tweetQuote')
            .attr('href',
            'https://twitter.com/intent/tweet?text= ' + currQuote.title+' - ' + currQuote.author
            )
            .attr('target', '_blank')
            .attr('disabled',false);  //change attribute of the element
            $('.read').html('Show me one more time!');
        });



        console.log(data);
    });
});