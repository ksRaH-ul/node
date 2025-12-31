let review ={
    name:"rahul",
    comment:"asdjh jkhasdjh asdjsuwoeqwo  sdklsadk opqwe opqweqweqe,askd",
}

function Review(review)
{
    name=review.name.toUpperCase();
    comment=review.comment.slice(0,20);

    console.log(` thank you ${name}`);
    console.log(comment);
    
    
}
Review(review); 

