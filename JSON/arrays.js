var myObj,
  x,
  i,
  j = '';

myObj = {
  page: 1,
  per_page: 10,
  total: 13,
  total_pages: 2,
  data: [
    {
      Poster:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg',
      Title: 'Italian Spiderman',
      Type: 'movie',
      Year: 2007,
      imdbID: 'tt2705436',
    },
  ],
};

y = '';

console.log(myObj.data);

for (i in myObj.data) {
  x += myObj.data.Title;
  for (j in myObj.data[i].Title) {
    x += myObj.data[i].Title[j];
  }
}

console.log(x);
