//Initialize DataTable//
const dataTable = new simpleDatatables.DataTable("#datatable", {
    searchable: true,
    fixedHeight: true,
    data:{
        headings: ['Movie Title', 'Director', 'Box Office Revenue', 'Release Date'],
    }
});
dataTable.rows().add([//Populated myself in real life scenario this would be fetched from a database
    ['The Lawnmower Man', 'Brett Leonard', '$32.1 million', 'March 6, 1992'],
    ['Inception', 'Christopher Nolan', '$836.8 million', 'July 16, 2010'],
    ['Swordfish', 'Dominic Sena', '$147.1 million', 'June 8, 2001'],
    ['Tenet', 'Christopher Nolan', '$363.1 million', 'August 26, 2020'],
    ['The Social Network', 'David Fincher', '$224.9 million', 'October 1, 2010'],
    ['The Imitation Game', 'Morten Tyldum', '$233.6 million', 'November 14, 2014'],
    ['WarGames', 'John Badham', '$79.6 million', 'June 3, 1983'],
    ['Hackers', 'Iain Softley', '$7.5 million', 'September 15, 1995'],
    ['Tron', 'Steven Lisberger', '$50 million', 'July 9, 1982'],
    ['Sneakers', 'Phil Alden Robinson', '$105.2 million', 'September 9, 1992'],
    ['Wargames', 'John Badham', '$79.6 million', 'June 3, 1983'],
    ['Hackers', 'Iain Softley', '$7.5 million', 'September 15, 1995'],
    ['The Net', 'Irwin Winkler', '$110.6 million', 'July 28, 1995'],
    ['The Social Network', 'David Fincher', '$224.9 million', 'October 1, 2010'],
    ['The Imitation Game', 'Morten Tyldum', '$233.6 million', 'November 14, 2014'],
    ['Tron', 'Steven Lisberger', '$50 million', 'July 9, 1982'],
    ['Tron: Legacy', 'Joseph Kosinski', '$400.1 million', 'December 17, 2010'],
    ['Antitrust', 'Peter Howitt', '$18.1 million', 'January 12, 2001'],
    ['WarGames', 'John Badham', '$79.6 million', 'June 3, 1983'],
    ['Johnny Mnemonic', 'Robert Longo', '$52.4 million', 'May 26, 1995'],
    ['Antitrust', 'Peter Howitt', '$18.1 million', 'January 12, 2001'],
    ['The Fifth Estate', 'Bill Condon', '$8.6 million', 'October 18, 2013'],
    ['Enemy of the State', 'Tony Scott', '$250.6 million', 'November 20, 1998'],
    ['Blackhat', 'Michael Mann', '$19.7 million', 'January 16, 2015'],
    ['The Core', 'Jon Amiel', '$74.1 million', 'March 28, 2003'],
    ['Ghost in the Shell', 'Rupert Sanders', '$169.8 million', 'March 31, 2017'],
    ['Live Free or Die Hard', 'Len Wiseman', '$388.1 million', 'June 27, 2007']
]);