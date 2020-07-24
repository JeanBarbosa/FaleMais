/**
 * Código Nacional – CN relativo a cada município brasileiro.
 * http://www.anatel.gov.br\dadosabertos\PDA\Codigo_Nacional\PGCN.csv
 */

const citys = [
   {
     "id": 1,
     "ddd" : 11,
     "name" : "Aluminio",
     "uf" : "SP"
   },
   {
     "id": 2,
     "ddd" : 11,
     "name" : "Aracariguama",
     "uf" : "SP"
   },
   {
     "id": 3,
     "ddd" : 11,
     "name" : "Aruja",
     "uf" : "SP"
   },
   {
     "id": 4,
     "ddd" : 11,
     "name" : "Atibaia",
     "uf" : "SP"
   },
   {
     "id": 5,
     "ddd" : 11,
     "name" : "Barueri",
     "uf" : "SP"
   },
   {
     "id": 6,
     "ddd" : 11,
     "name" : "Biritiba-Mirim",
     "uf" : "SP"
   },
   {
     "id": 7,
     "ddd" : 11,
     "name" : "Bom Jesus Dos Perdões",
     "uf" : "SP"
   },
   {
     "id": 8,
     "ddd" : 11,
     "name" : "Braganca Paulista",
     "uf" : "SP"
   },
   {
     "id": 9,
     "ddd" : 11,
     "name" : "Cabreuva",
     "uf" : "SP"
   },
   {
     "id": 10,
     "ddd" : 11,
     "name" : "Caieiras",
     "uf" : "SP"
   },
   {
     "id": 11,
     "ddd" : 11,
     "name" : "Cajamar",
     "uf" : "SP"
   },
   {
     "id": 12,
     "ddd" : 11,
     "name" : "Campo Limpo Paulista",
     "uf" : "SP"
   },
   {
     "id": 13,
     "ddd" : 11,
     "name" : "Carapicuiba",
     "uf" : "SP"
   },
   {
     "id": 14,
     "ddd" : 11,
     "name" : "Cotia",
     "uf" : "SP"
   },
   {
     "id": 15,
     "ddd" : 11,
     "name" : "Diadema",
     "uf" : "SP"
   },
   {
     "id": 16,
     "ddd" : 11,
     "name" : "Embu",
     "uf" : "SP"
   },
   {
     "id": 17,
     "ddd" : 11,
     "name" : "Embu-Guacu",
     "uf" : "SP"
   },
   {
     "id": 18,
     "ddd" : 11,
     "name" : "Ferraz De Vasconcelos",
     "uf" : "SP"
   },
   {
     "id": 19,
     "ddd" : 11,
     "name" : "Francisco Morato",
     "uf" : "SP"
   },
   {
     "id": 20,
     "ddd" : 11,
     "name" : "Franco Da Rocha",
     "uf" : "SP"
   },
   {
     "id": 21,
     "ddd" : 11,
     "name" : "Guararema",
     "uf" : "SP"
   },
   {
     "id": 22,
     "ddd" : 11,
     "name" : "Guarulhos",
     "uf" : "SP"
   },
   {
     "id": 23,
     "ddd" : 11,
     "name" : "Igarata",
     "uf" : "SP"
   },
   {
     "id": 24,
     "ddd" : 11,
     "name" : "Itapecerica Da Serra",
     "uf" : "SP"
   },
   {
     "id": 25,
     "ddd" : 11,
     "name" : "Itapevi",
     "uf" : "SP"
   },
   {
     "id": 26,
     "ddd" : 11,
     "name" : "Itaquaquecetuba",
     "uf" : "SP"
   },
   {
     "id": 27,
     "ddd" : 11,
     "name" : "Itatiba",
     "uf" : "SP"
   },
   {
     "id": 28,
     "ddd" : 11,
     "name" : "Itu",
     "uf" : "SP"
   },
   {
     "id": 29,
     "ddd" : 11,
     "name" : "Itupeva",
     "uf" : "SP"
   },
   {
     "id": 30,
     "ddd" : 11,
     "name" : "Jandira",
     "uf" : "SP"
   },
   {
     "id": 31,
     "ddd" : 11,
     "name" : "Jarinu",
     "uf" : "SP"
   },
   {
     "id": 32,
     "ddd" : 11,
     "name" : "Joanopolis",
     "uf" : "SP"
   },
   {
     "id": 33,
     "ddd" : 11,
     "name" : "Jundiai",
     "uf" : "SP"
   },
   {
     "id": 34,
     "ddd" : 11,
     "name" : "Juquitiba",
     "uf" : "SP"
   },
   {
     "id": 35,
     "ddd" : 11,
     "name" : "Mairinque",
     "uf" : "SP"
   },
   {
     "id": 36,
     "ddd" : 11,
     "name" : "Mairipora",
     "uf" : "SP"
   },
   {
     "id": 37,
     "ddd" : 11,
     "name" : "Maua",
     "uf" : "SP"
   },
   { 
     "id": 38,
     "ddd" : 11,
     "name" : "Mogi Das Cruzes",
     "uf" : "SP"
   },
   {
     "id": 39,
     "ddd" : 11,
     "name" : "Morungaba",
     "uf" : "SP"
   },
   {
     "id": 40,
     "ddd" : 11,
     "name" : "Nazare Paulista",
     "uf" : "SP"
   },
   {
     "id": 41,
     "ddd" : 11,
     "name" : "Osasco",
     "uf" : "SP"
   },
   {
     "id": 42,
     "ddd" : 11,
     "name" : "Pedra Bela",
     "uf" : "SP"
   },
   {
     "id": 43,
     "ddd" : 11,
     "name" : "Pinhalzinho",
     "uf" : "SP"
   },
   {
     "id": 44,
     "ddd" : 11,
     "name" : "Piracaia",
     "uf" : "SP"
   },
   {
     "id": 45,
     "ddd" : 11,
     "name" : "Pirapora Do Bom Jesus",
     "uf" : "SP"
   },
   {
     "id": 46,
     "ddd" : 11,
     "name" : "Poa",
     "uf" : "SP"
   },
   {
     "id": 47,
     "ddd" : 11,
     "name" : "Ribeirão Pires",
     "uf" : "SP"
   },
   {
     "id": 48,
     "ddd" : 11,
     "name" : "Rio Grande Da Serra",
     "uf" : "SP"
   },
   {
     "id": 49,
     "ddd" : 11,
     "name" : "Salesopolis",
     "uf" : "SP"
   },
   {
     "id": 50,
     "ddd" : 11,
     "name" : "Salto",
     "uf" : "SP"
   },
   {
     "id": 51,
     "ddd" : 11,
     "name" : "Santa Isabel",
     "uf" : "SP"
   },
   {
     "id": 52,
     "ddd" : 11,
     "name" : "Santana De Parnaiba",
     "uf" : "SP"
   },
   {
     "id": 53,
     "ddd" : 11,
     "name" : "Santo Andre",
     "uf" : "SP"
   },
   {
     "id": 54,
     "ddd" : 11,
     "name" : "São Bernardo Do Campo",
     "uf" : "SP"
   },
   {
     "id": 55,
     "ddd" : 11,
     "name" : "São Caetano Do Sul",
     "uf" : "SP"
   },
   {
     "id": 56,
     "ddd" : 11,
     "name" : "São Lourenco Da Serra",
     "uf" : "SP"
   },
   {
     "id": 57,
     "ddd" : 11,
     "name" : "São Paulo",
     "uf" : "SP"
   },
   {
     "id": 58,
     "ddd" : 11,
     "name" : "São Roque",
     "uf" : "SP"
   },
   {
     "id": 59,
     "ddd" : 11,
     "name" : "Suzano",
     "uf" : "SP"
   },
   {
     "id": 59,
     "ddd" : 11,
     "name" : "Taboão Da Serra",
     "uf" : "SP"
   },
   {
     "id": 60,
     "ddd" : 11,
     "name" : "Tuiuti",
     "uf" : "SP"
   },
   {
     "id": 61,
     "ddd" : 11,
     "name" : "Vargem",
     "uf" : "SP"
   },
   {
     "id": 62,
     "ddd" : 11,
     "name" : "Vargem Grande Paulista",
     "uf" : "SP"
   },
   {
     "id": 63,
     "ddd" : 11,
     "name" : "Varzea Paulista",
     "uf" : "SP"
   },
   {
     "id": 64,
     "ddd" : 16,
     "name" : "Altinopolis",
     "uf" : "SP"
   },
   {
     "id": 65,
     "ddd" : 16,
     "name" : "Americo Brasiliense",
     "uf" : "SP"
   },
   {
     "id": 66,
     "ddd" : 16,
     "name" : "Aramina",
     "uf" : "SP"
   },
   {
     "id": 67,
     "ddd" : 16,
     "name" : "Araraquara",
     "uf" : "SP"
   },
   {
     "id": 68,
     "ddd" : 16,
     "name" : "Barrinha",
     "uf" : "SP"
   },
   {
     "id": 69,
     "ddd" : 16,
     "name" : "Batatais",
     "uf" : "SP"
   },
   {
     "id": 70,
     "ddd" : 16,
     "name" : "Boa Esperanca Do Sul",
     "uf" : "SP"
   },
   {
     "id": 71,
     "ddd" : 16,
     "name" : "Borborema",
     "uf" : "SP"
   },
   {
     "id": 72,
     "ddd" : 16,
     "name" : "Brodowski",
     "uf" : "SP"
   },
   {
     "id": 73,
     "ddd" : 16,
     "name" : "Buritizal",
     "uf" : "SP"
   },
   {
     "id": 74,
     "ddd" : 16,
     "name" : "Cajuru",
     "uf" : "SP"
   },
   {
     "id": 75,
     "ddd" : 16,
     "name" : "Candido Rodrigues",
     "uf" : "SP"
   },
   {
     "id": 76,
     "ddd" : 16,
     "name" : "Cassia Dos Coqueiros",
     "uf" : "SP"
   },
   {
     "id": 77,
     "ddd" : 16,
     "name" : "Cravinhos",
     "uf" : "SP"
   },
   {
     "id": 78,
     "ddd" : 16,
     "name" : "Cristais Paulista",
     "uf" : "SP"
   },
   {
     "id": 79,
     "ddd" : 16,
     "name" : "Dobrada",
     "uf" : "SP"
   },
   {
     "id": 80,
     "ddd" : 16,
     "name" : "Dourado",
     "uf" : "SP"
   },
   {
     "id": 81,
     "ddd" : 16,
     "name" : "Dumont",
     "uf" : "SP"
   },
   {
     "id": 82,
     "ddd" : 16,
     "name" : "Fernando Prestes",
     "uf" : "SP"
   },
   {
     "id": 83,
     "ddd" : 16,
     "name" : "Franca",
     "uf" : "SP"
   },
   {
     "id": 84,
     "ddd" : 16,
     "name" : "Gavião Peixoto",
     "uf" : "SP"
   },
   {
     "id": 85,
     "ddd" : 16,
     "name" : "Guara",
     "uf" : "SP"
   },
   {
     "id": 86,
     "ddd" : 16,
     "name" : "Guariba",
     "uf" : "SP"
   },
   {
     "id": 87,
     "ddd" : 16,
     "name" : "Guatapara",
     "uf" : "SP"
   },
   {
     "id": 88,
     "ddd" : 16,
     "name" : "Ibate",
     "uf" : "SP"
   },
   {
     "id": 89,
     "ddd" : 16,
     "name" : "Ibitinga",
     "uf" : "SP"
   },
   {
     "id": 90,
     "ddd" : 16,
     "name" : "Igarapava",
     "uf" : "SP"
   },
   {
     "id": 91,
     "ddd" : 16,
     "name" : "Ipua",
     "uf" : "SP"
   },
   {
     "id": 92,
     "ddd" : 16,
     "name" : "Itapolis",
     "uf" : "SP"
   },
   {
     "id": 93,
     "ddd" : 16,
     "name" : "Itirapua",
     "uf" : "SP"
   },
   {
     "id": 94,
     "ddd" : 16,
     "name" : "Ituverava",
     "uf" : "SP"
   },
   {
     "id": 95,
     "ddd" : 16,
     "name" : "Jaboticabal",
     "uf" : "SP"
   },
   {
     "id": 96,
     "ddd" : 16,
     "name" : "Jardinopolis",
     "uf" : "SP"
   },
   {
     "id": 97,
     "ddd" : 16,
     "name" : "Jeriquara",
     "uf" : "SP"
   },
   {
     "id": 98,
     "ddd" : 16,
     "name" : "Luis Antonio",
     "uf" : "SP"
   },
   {
     "id": 99,
     "ddd" : 16,
     "name" : "Matão",
     "uf" : "SP"
   },
   {
     "id": 100,
     "ddd" : 16,
     "name" : "Miguelopolis",
     "uf" : "SP"
   },
   {
     "id": 101,
     "ddd" : 16,
     "name" : "Monte Alto",
     "uf" : "SP"
   },
   {
     "id": 102,
     "ddd" : 16,
     "name" : "Morro Agudo",
     "uf" : "SP"
   },
   {
     "id": 103,
     "ddd" : 16,
     "name" : "Motuca",
     "uf" : "SP"
   },
   {
     "id": 104,
     "ddd" : 16,
     "name" : "Nova Europa",
     "uf" : "SP"
   },
   {
     "id": 105,
     "ddd" : 16,
     "name" : "Nuporanga",
     "uf" : "SP"
   },
   {
     "id": 106,
     "ddd" : 16,
     "name" : "Orlandia",
     "uf" : "SP"
   },
   {
     "id": 107,
     "ddd" : 16,
     "name" : "Patrocinio Paulista",
     "uf" : "SP"
   },
   {
     "id": 108,
     "ddd" : 16,
     "name" : "Pedregulho",
     "uf" : "SP"
   },
   {
     "id": 109,
     "ddd" : 16,
     "name" : "Pitangueiras",
     "uf" : "SP"
   },
   {
     "id": 110,
     "ddd" : 16,
     "name" : "Pontal",
     "uf" : "SP"
   },
   {
     "id": 111,
     "ddd" : 16,
     "name" : "Pradopolis",
     "uf" : "SP"
   },
   {
     "id": 112,
     "ddd" : 16,
     "name" : "Restinga",
     "uf" : "SP"
   },
   {
     "id": 113,
     "ddd" : 16,
     "name" : "Ribeirão Bonito",
     "uf" : "SP"
   },
   {
     "id": 114,
     "ddd" : 16,
     "name" : "Ribeirão Corrente",
     "uf" : "SP"
   },
   {
     "id": 115,
     "ddd" : 16,
     "name" : "Ribeirão Preto",
     "uf" : "SP"
   },
   {
     "id": 116,
     "ddd" : 16,
     "name" : "Rifaina",
     "uf" : "SP"
   },
   {
     "id": 117,
     "ddd" : 16,
     "name" : "Rincão",
     "uf" : "SP"
   },
   {
     "id": 118,
     "ddd" : 16,
     "name" : "Sales Oliveira",
     "uf" : "SP"
   },
   {
     "id": 119,
     "ddd" : 16,
     "name" : "Santa Cruz Da Esperanca",
     "uf" : "SP"
   },
   {
     "id": 120,
     "ddd" : 16,
     "name" : "Santa Ernestina",
     "uf" : "SP"
   },
   {
     "id": 121,
     "ddd" : 16,
     "name" : "Santa Lucia",
     "uf" : "SP"
   },
   {
     "id": 122,
     "ddd" : 16,
     "name" : "Santa Rosa De Viterbo",
     "uf" : "SP"
   },
   {
     "id": 123,
     "ddd" : 16,
     "name" : "Santo Antonio Da Alegria",
     "uf" : "SP"
   },
   {
     "id": 124,
     "ddd" : 16,
     "name" : "São Carlos",
     "uf" : "SP"
   },
   {
     "id": 125,
     "ddd" : 16,
     "name" : "São Joaquim Da Barra",
     "uf" : "SP"
   },
   {
     "id": 126,
     "ddd" : 16,
     "name" : "São Jose Da Bela Vista",
     "uf" : "SP"
   },
   {
     "id": 127,
     "ddd" : 16,
     "name" : "São Simão",
     "uf" : "SP"
   },
   {
     "id": 128,
     "ddd" : 16,
     "name" : "Serra Azul",
     "uf" : "SP"
   },
   {
     "id": 129,
     "ddd" : 16,
     "name" : "Serrana",
     "uf" : "SP"
   },
   {
     "id": 130,
     "ddd" : 16,
     "name" : "Sertãozinho",
     "uf" : "SP"
   },
   {
     "id": 131,
     "ddd" : 16,
     "name" : "Tabatinga",
     "uf" : "SP"
   },
   {
     "id": 132,
     "ddd" : 16,
     "name" : "Taiacu",
     "uf" : "SP"
   },
   {
     "id": 133,
     "ddd" : 16,
     "name" : "Taiuva",
     "uf" : "SP"
   },
   {
     "id": 134,
     "ddd" : 16,
     "name" : "Taquaral",
     "uf" : "SP"
   },
   {
     "id": 135,
     "ddd" : 16,
     "name" : "Taquaritinga",
     "uf" : "SP"
   },
   {
     "id": 136,
     "ddd" : 16,
     "name" : "Trabiju",
     "uf" : "SP"
   },
   {
     "id": 137,
     "ddd" : 16,
     "name" : "Vista Alegre Do Alto",
     "uf" : "SP"
   },
   {
     "id": 138,
     "ddd" : 17,
     "name" : "Adolfo",
     "uf" : "SP"
   },
   {
     "id": 139,
     "ddd" : 17,
     "name" : "Altair",
     "uf" : "SP"
   },
   {
     "id": 140,
     "ddd" : 17,
     "name" : "Alvares Florence",
     "uf" : "SP"
   },
   {
     "id": 141,
     "ddd" : 17,
     "name" : "Americo De Campos",
     "uf" : "SP"
   },
   {
     "id": 142,
     "ddd" : 17,
     "name" : "Aparecida D'Oeste",
     "uf" : "SP"
   },
   {
     "id": 143,
     "ddd" : 17,
     "name" : "Ariranha",
     "uf" : "SP"
   },
   {
     "id": 144,
     "ddd" : 17,
     "name" : "Aspasia",
     "uf" : "SP"
   },
   {
     "id": 145,
     "ddd" : 17,
     "name" : "Auriflama",
     "uf" : "SP"
   },
   {
     "id": 146,
     "ddd" : 17,
     "name" : "Bady Bassitt",
     "uf" : "SP"
   },
   {
     "id": 147,
     "ddd" : 17,
     "name" : "Balsamo",
     "uf" : "SP"
   },
   {
     "id": 148,
     "ddd" : 17,
     "name" : "Barretos",
     "uf" : "SP"
   },
   {
     "id": 149,
     "ddd" : 17,
     "name" : "Bebedouro",
     "uf" : "SP"
   },
   {
     "id": 150,
     "ddd" : 17,
     "name" : "Cajobi",
     "uf" : "SP"
   },
   {
     "id": 151,
     "ddd" : 17,
     "name" : "Cardoso",
     "uf" : "SP"
   },
   {
     "id": 152,
     "ddd" : 17,
     "name" : "Catanduva",
     "uf" : "SP"
   },
   {
     "id": 153,
     "ddd" : 17,
     "name" : "Catigua",
     "uf" : "SP"
   },
   {
     "id": 154,
     "ddd" : 17,
     "name" : "Cedral",
     "uf" : "SP"
   },
   {
     "id": 155,
     "ddd" : 17,
     "name" : "Colina",
     "uf" : "SP"
   },
   {
     "id": 156,
     "ddd" : 17,
     "name" : "Colombia",
     "uf" : "SP"
   },
   {
     "id": 157,
     "ddd" : 17,
     "name" : "Cosmorama",
     "uf" : "SP"
   },
   {
     "id": 158,
     "ddd" : 17,
     "name" : "Dirce Reis",
     "uf" : "SP"
   },
   {
     "id": 159,
     "ddd" : 17,
     "name" : "Dolcinopolis",
     "uf" : "SP"
   },
   {
     "id": 160,
     "ddd" : 17,
     "name" : "Elisiario",
     "uf" : "SP"
   },
   {
     "id": 161,
     "ddd" : 17,
     "name" : "Embauba",
     "uf" : "SP"
   },
   {
     "id": 162,
     "ddd" : 17,
     "name" : "Estrela D'Oeste",
     "uf" : "SP"
   },
   {
     "id": 163,
     "ddd" : 17,
     "name" : "Fernandopolis",
     "uf" : "SP"
   },
   {
     "id": 164,
     "ddd" : 17,
     "name" : "Floreal",
     "uf" : "SP"
   },
   {
     "id": 165,
     "ddd" : 17,
     "name" : "Gastão Vidigal",
     "uf" : "SP"
   },
   {
     "id": 166,
     "ddd" : 17,
     "name" : "General Salgado",
     "uf" : "SP"
   },
   {
     "id": 167,
     "ddd" : 17,
     "name" : "Guaira",
     "uf" : "SP"
   },
   {
     "id": 168,
     "ddd" : 17,
     "name" : "Guapiacu",
     "uf" : "SP"
   },
   {
     "id": 169,
     "ddd" : 17,
     "name" : "Guaraci",
     "uf" : "SP"
   },
   {
     "id": 170,
     "ddd" : 17,
     "name" : "Guarani D'Oeste",
     "uf" : "SP"
   },
   {
     "id": 171,
     "ddd" : 17,
     "name" : "Guzolandia",
     "uf" : "SP"
   },
   {
     "id": 172,
     "ddd" : 17,
     "name" : "Ibira",
     "uf" : "SP"
   },
   {
     "id": 173,
     "ddd" : 17,
     "name" : "Icem",
     "uf" : "SP"
   },
   {
     "id": 174,
     "ddd" : 17,
     "name" : "Indiapora",
     "uf" : "SP"
   },
   {
     "id": 175,
     "ddd" : 17,
     "name" : "Irapua",
     "uf" : "SP"
   },
   {
     "id": 176,
     "ddd" : 17,
     "name" : "Itajobi",
     "uf" : "SP"
   },
   {
     "id": 177,
     "ddd" : 17,
     "name" : "Jaborandi",
     "uf" : "SP"
   },
   {
     "id": 178,
     "ddd" : 17,
     "name" : "Jaci",
     "uf" : "SP"
   },
   {
     "id": 179,
     "ddd" : 17,
     "name" : "Jales",
     "uf" : "SP"
   },
   {
     "id": 180,
     "ddd" : 17,
     "name" : "Jose Bonifacio",
     "uf" : "SP"
   },
   {
     "id": 181,
     "ddd" : 17,
     "name" : "Macaubal",
     "uf" : "SP"
   },
   {
     "id": 182,
     "ddd" : 17,
     "name" : "Macedonia",
     "uf" : "SP"
   },
   {
     "id": 183,
     "ddd" : 17,
     "name" : "Magda",
     "uf" : "SP"
   },
   {
     "id": 184,
     "ddd" : 17,
     "name" : "Marapoama",
     "uf" : "SP"
   },
   {
     "id": 185,
     "ddd" : 17,
     "name" : "Marinopolis",
     "uf" : "SP"
   },
   {
     "id": 186,
     "ddd" : 17,
     "name" : "Mendonca",
     "uf" : "SP"
   },
   {
     "id": 187,
     "ddd" : 17,
     "name" : "Meridiano",
     "uf" : "SP"
   },
   {
     "id": 188,
     "ddd" : 17,
     "name" : "Mesopolis",
     "uf" : "SP"
   },
   {
     "id": 189,
     "ddd" : 17,
     "name" : "Mira Estrela",
     "uf" : "SP"
   },
   {
     "id": 190,
     "ddd" : 17,
     "name" : "Mirassol",
     "uf" : "SP"
   },
   {
     "id": 191,
     "ddd" : 17,
     "name" : "Mirassolandia",
     "uf" : "SP"
   },
   {
     "id": 192,
     "ddd" : 17,
     "name" : "Moncoes",
     "uf" : "SP"
   },
   {
     "id": 193,
     "ddd" : 17,
     "name" : "Monte Aprazivel",
     "uf" : "SP"
   },
   {
     "id": 194,
     "ddd" : 17,
     "name" : "Monte Azul Paulista",
     "uf" : "SP"
   },
   {
     "id": 195,
     "ddd" : 17,
     "name" : "Neves Paulista",
     "uf" : "SP"
   },
   {
     "id": 196,
     "ddd" : 17,
     "name" : "Nhandeara",
     "uf" : "SP"
   },
   {
     "id": 197,
     "ddd" : 17,
     "name" : "Nipoa",
     "uf" : "SP"
   },
   {
     "id": 198,
     "ddd" : 17,
     "name" : "Nova Alianca",
     "uf" : "SP"
   },
   {
     "id": 199,
     "ddd" : 17,
     "name" : "Nova Canaa Paulista",
     "uf" : "SP"
   },
   {
     "id": 200,
     "ddd" : 17,
     "name" : "Nova Castilho",
     "uf" : "SP"
   },
   {
     "id": 201,
     "ddd" : 17,
     "name" : "Nova Granada",
     "uf" : "SP"
   },
   {
     "id": 202,
     "ddd" : 17,
     "name" : "Nova Luzitania",
     "uf" : "SP"
   },
   {
     "id": 203,
     "ddd" : 17,
     "name" : "Novais",
     "uf" : "SP"
   },
   {
     "id": 204,
     "ddd" : 17,
     "name" : "Novo Horizonte",
     "uf" : "SP"
   },
   {
     "id": 205,
     "ddd" : 17,
     "name" : "Olimpia",
     "uf" : "SP"
   },
   {
     "id": 206,
     "ddd" : 17,
     "name" : "Onda Verde",
     "uf" : "SP"
   },
   {
     "id": 207,
     "ddd" : 17,
     "name" : "Orindiuva",
     "uf" : "SP"
   },
   {
     "id": 208,
     "ddd" : 17,
     "name" : "Ouroeste",
     "uf" : "SP"
   },
   {
     "id": 209,
     "ddd" : 17,
     "name" : "Palestina",
     "uf" : "SP"
   },
   {
     "id": 210,
     "ddd" : 17,
     "name" : "Palmares Paulista",
     "uf" : "SP"
   },
   {
     "id": 211,
     "ddd" : 17,
     "name" : "Palmeira D'Oeste",
     "uf" : "SP"
   },
   {
     "id": 212,
     "ddd" : 17,
     "name" : "Paraiso",
     "uf" : "SP"
   },
   {
     "id": 213,
     "ddd" : 17,
     "name" : "Paranapua",
     "uf" : "SP"
   },
   {
     "id": 214,
     "ddd" : 17,
     "name" : "Parisi",
     "uf" : "SP"
   },
   {
     "id": 215,
     "ddd" : 17,
     "name" : "Paulo De Faria",
     "uf" : "SP"
   },
   {
     "id": 216,
     "ddd" : 17,
     "name" : "Pedranopolis",
     "uf" : "SP"
   },
   {
     "id": 217,
     "ddd" : 17,
     "name" : "Pindorama",
     "uf" : "SP"
   },
   {
     "id": 218,
     "ddd" : 17,
     "name" : "Pirangi",
     "uf" : "SP"
   },
   {
     "id": 219,
     "ddd" : 17,
     "name" : "Poloni",
     "uf" : "SP"
   },
   {
     "id": 220,
     "ddd" : 17,
     "name" : "Pontalinda",
     "uf" : "SP"
   },
   {
     "id": 221,
     "ddd" : 17,
     "name" : "Pontes Gestal",
     "uf" : "SP"
   },
   {
     "id": 222,
     "ddd" : 17,
     "name" : "Populina",
     "uf" : "SP"
   },
   {
     "id": 223,
     "ddd" : 17,
     "name" : "Potirendaba",
     "uf" : "SP"
   },
   {
     "id": 224,
     "ddd" : 17,
     "name" : "Riolandia",
     "uf" : "SP"
   },
   {
     "id": 225,
     "ddd" : 17,
     "name" : "Rubineia",
     "uf" : "SP"
   },
   {
     "id": 226,
     "ddd" : 17,
     "name" : "Sales",
     "uf" : "SP"
   },
   {
     "id": 227,
     "ddd" : 17,
     "name" : "Santa Adelia",
     "uf" : "SP"
   },
   {
     "id": 228,
     "ddd" : 17,
     "name" : "Santa Albertina",
     "uf" : "SP"
   },
   {
     "id": 229,
     "ddd" : 17,
     "name" : "Santa Clara D'Oeste",
     "uf" : "SP"
   },
   {
     "id": 230,
     "ddd" : 17,
     "name" : "Santa Fe Do Sul",
     "uf" : "SP"
   },
   {
     "id": 231,
     "ddd" : 17,
     "name" : "Santa Rita D'Oeste",
     "uf" : "SP"
   },
   {
     "id": 232,
     "ddd" : 17,
     "name" : "Santa Salete",
     "uf" : "SP"
   },
   {
     "id": 233,
     "ddd" : 17,
     "name" : "Santana Da Ponte Pensa",
     "uf" : "SP"
   },
   {
     "id": 234,
     "ddd" : 17,
     "name" : "São Francisco",
     "uf" : "SP"
   },
   {
     "id": 235,
     "ddd" : 17,
     "name" : "São João Das Duas Pontes",
     "uf" : "SP"
   },
   {
     "id": 236,
     "ddd" : 17,
     "name" : "São João De Iracema",
     "uf" : "SP"
   },
   {
     "id": 237,
     "ddd" : 17,
     "name" : "São Jose Do Rio Preto",
     "uf" : "SP"
   },
   {
     "id": 238,
     "ddd" : 17,
     "name" : "Sebastianopolis Do Sul",
     "uf" : "SP"
   },
   {
     "id": 239,
     "ddd" : 17,
     "name" : "Severinia",
     "uf" : "SP"
   },
   {
     "id": 240,
     "ddd" : 17,
     "name" : "Tabapua",
     "uf" : "SP"
   },
   {
     "id": 241,
     "ddd" : 17,
     "name" : "Tanabi",
     "uf" : "SP"
   },
   {
     "id": 242,
     "ddd" : 17,
     "name" : "Terra Roxa",
     "uf" : "SP"
   },
   {
     "id": 243,
     "ddd" : 17,
     "name" : "Tres Fronteiras",
     "uf" : "SP"
   },
   {
     "id": 244,
     "ddd" : 17,
     "name" : "Turmalina",
     "uf" : "SP"
   }, 
   {
     "id": 245,
     "ddd" : 17,
     "name" : "Ubarana",
     "uf" : "SP"
   }, 
   {
     "id": 246,
     "ddd" : 17,
     "name" : "Uchoa",
     "uf" : "SP"
   },
   {
     "id": 247,
     "ddd" : 17,
     "name" : "União Paulista",
     "uf" : "SP"
   },
   {
     "id": 248,
     "ddd" : 17,
     "name" : "Urania",
     "uf" : "SP"
   }, 
   {
     "id": 249,
     "ddd" : 17,
     "name" : "Urupes",
     "uf" : "SP"
   },
   {
     "id": 250,
     "ddd" : 17,
     "name" : "Valentim Gentil",
     "uf" : "SP"
   },
   {
     "id": 251,
     "ddd" : 17,
     "name" : "Viradouro",
     "uf" : "SP"
   },
   {
     "id": 252,
     "ddd" : 17,
     "name" : "Vitoria Brasil",
     "uf" : "SP"
   },
   {
     "id": 253,
     "ddd" : 17,
     "name" : "Votuporanga",
     "uf" : "SP"
   },
   {
     "id": 254,
     "ddd" : 18,
     "name" : "Adamantina",
     "uf" : "SP"
   },
   {
     "id": 255,
     "ddd" : 18,
     "name" : "Alfredo Marcondes",
     "uf" : "SP"
   },
   {
     "id": 256,
     "ddd" : 18,
     "name" : "Alto Alegre",
     "uf" : "SP"
   },
   {
     "id": 257,
     "ddd" : 18,
     "name" : "Alvares Machado",
     "uf" : "SP"
   },
   {
     "id": 258,
     "ddd" : 18,
     "name" : "Andradina",
     "uf" : "SP"
   },
   {
     "id": 259,
     "ddd" : 18,
     "name" : "Anhumas",
     "uf" : "SP"
   },
   {
     "id": 260,
     "ddd" : 18,
     "name" : "Aracatuba",
     "uf" : "SP"
   },
   {
     "id": 261,
     "ddd" : 18,
     "name" : "Assis",
     "uf" : "SP"
   },
   {
     "id": 262,
     "ddd" : 18,
     "name" : "Avanhandava",
     "uf" : "SP"
   },
   {
     "id": 263,
     "ddd" : 18,
     "name" : "Barbosa",
     "uf" : "SP"
   },
   {
     "id": 264,
     "ddd" : 18,
     "name" : "Bento De Abreu",
     "uf" : "SP"
   },
   {
     "id": 265,
     "ddd" : 18,
     "name" : "Bilac",
     "uf" : "SP"
   },
   {
     "id": 266,
     "ddd" : 18,
     "name" : "Birigui",
     "uf" : "SP"
   },
   {
     "id": 267,
     "ddd" : 18,
     "name" : "Bora",
     "uf" : "SP"
   },
   {
     "id": 268,
     "ddd" : 18,
     "name" : "Brauna",
     "uf" : "SP"
   },
   {
     "id": 269,
     "ddd" : 18,
     "name" : "Brejo Alegre",
     "uf" : "SP"
   },
   {
     "id": 270,
     "ddd" : 18,
     "name" : "Buritama",
     "uf" : "SP"
   },
   {
     "id": 271,
     "ddd" : 18,
     "name" : "Caiabu",
     "uf" : "SP"
   },
   {
     "id": 272,
     "ddd" : 18,
     "name" : "Caiua",
     "uf" : "SP"
   },
   {
     "id": 273,
     "ddd" : 18,
     "name" : "Candido Mota",
     "uf" : "SP"
   },
   {
     "id": 274,
     "ddd" : 18,
     "name" : "Castilho",
     "uf" : "SP"
   },
   {
     "id": 275,
     "ddd" : 18,
     "name" : "Clementina",
     "uf" : "SP"
   },
   {
     "id": 276,
     "ddd" : 18,
     "name" : "Coroados",
     "uf" : "SP"
   },
   {
     "id": 277,
     "ddd" : 18,
     "name" : "Cruzalia",
     "uf" : "SP"
   },
   {
     "id": 278,
     "ddd" : 18,
     "name" : "Dracena",
     "uf" : "SP"
   },
   {
     "id": 279,
     "ddd" : 18,
     "name" : "Echapora",
     "uf" : "SP"
   },
   {
     "id": 280,
     "ddd" : 18,
     "name" : "Emilianopolis",
     "uf" : "SP"
   },
   {
     "id": 281,
     "ddd" : 18,
     "name" : "Estrela Do Norte",
     "uf" : "SP"
   },
   {
     "id": 282,
     "ddd" : 18,
     "name" : "Euclides Da Cunha Paulista",
     "uf" : "SP"
   },
   {
     "id": 283,
     "ddd" : 18,
     "name" : "Flora Rica",
     "uf" : "SP"
   },
   {
     "id": 284,
     "ddd" : 18,
     "name" : "Florida Paulista",
     "uf" : "SP"
   },
   {
     "id": 285,
     "ddd" : 18,
     "name" : "Florinia",
     "uf" : "SP"
   },
   {
     "id": 286,
     "ddd" : 18,
     "name" : "Gabriel Monteiro",
     "uf" : "SP"
   },
   {
     "id": 287,
     "ddd" : 18,
     "name" : "Glicerio",
     "uf" : "SP"
   },
   {
     "id": 288,
     "ddd" : 18,
     "name" : "Guaracai",
     "uf" : "SP"
   },
   {
     "id": 289,
     "ddd" : 18,
     "name" : "Guararapes",
     "uf" : "SP"
   },
   {
     "id": 290,
     "ddd" : 18,
     "name" : "Iepe",
     "uf" : "SP"
   },
   {
     "id": 291,
     "ddd" : 18,
     "name" : "Ilha Solteira",
     "uf" : "SP"
   },
   {
     "id": 292,
     "ddd" : 18,
     "name" : "Indiana",
     "uf" : "SP"
   },
   {
     "id": 293,
     "ddd" : 18,
     "name" : "Inubia Paulista",
     "uf" : "SP"
   },
   {
     "id": 294,
     "ddd" : 18,
     "name" : "Irapuru",
     "uf" : "SP"
   },
   {
     "id": 295,
     "ddd" : 18,
     "name" : "Itapura",
     "uf" : "SP"
   },
   {
     "id": 296,
     "ddd" : 18,
     "name" : "João Ramalho",
     "uf" : "SP"
   },
   {
     "id": 297,
     "ddd" : 18,
     "name" : "Junqueiropolis",
     "uf" : "SP"
   },
   {
     "id": 298,
     "ddd" : 18,
     "name" : "Lavinia",
     "uf" : "SP"
   },
   {
     "id": 299,
     "ddd" : 18,
     "name" : "Lourdes",
     "uf" : "SP"
   },
   {
     "id": 300,
     "ddd" : 18,
     "name" : "Lucelia",
     "uf" : "SP"
   },
   {
     "id": 301,
     "ddd" : 18,
     "name" : "Luiziania",
     "uf" : "SP"
   },
   {
     "id": 302,
     "ddd" : 18,
     "name" : "Lutecia",
     "uf" : "SP"
   },
   {
     "id": 303,
     "ddd" : 18,
     "name" : "Maraba Paulista",
     "uf" : "SP"
   },
   {
     "id": 304,
     "ddd" : 18,
     "name" : "Maracai",
     "uf" : "SP"
   },
   {
     "id": 305,
     "ddd" : 18,
     "name" : "Mariapolis",
     "uf" : "SP"
   },
   {
     "id": 306,
     "ddd" : 18,
     "name" : "Martinopolis",
     "uf" : "SP"
   },
   {
     "id": 307,
     "ddd" : 18,
     "name" : "Mirandopolis",
     "uf" : "SP"
   },
   {
     "id": 308,
     "ddd" : 18,
     "name" : "Mirante Do Paranapanema",
     "uf" : "SP"
   },
   {
     "id": 309,
     "ddd" : 18,
     "name" : "Monte Castelo",
     "uf" : "SP"
   },
   {
     "id": 310,
     "ddd" : 18,
     "name" : "Murutinga Do Sul",
     "uf" : "SP"
   },
   {
     "id": 311,
     "ddd" : 18,
     "name" : "Nantes",
     "uf" : "SP"
   },
   {
     "id": 312,
     "ddd" : 18,
     "name" : "Narandiba",
     "uf" : "SP"
   },
   {
     "id": 313,
     "ddd" : 18,
     "name" : "Nova Guataporanga",
     "uf" : "SP"
   },
   {
     "id": 314,
     "ddd" : 18,
     "name" : "Nova Independencia",
     "uf" : "SP"
   },
   {
     "id": 315,
     "ddd" : 18,
     "name" : "Osvaldo Cruz",
     "uf" : "SP"
   },
   {
     "id": 316,
     "ddd" : 18,
     "name" : "Ouro Verde",
     "uf" : "SP"
   },
   {
     "id": 317,
     "ddd" : 18,
     "name" : "Pacaembu",
     "uf" : "SP"
   },
   {
     "id": 318,
     "ddd" : 18,
     "name" : "Palmital",
     "uf" : "SP"
   },
   {
     "id": 319,
     "ddd" : 18,
     "name" : "Panorama",
     "uf" : "SP"
   },
   {
     "id": 320,
     "ddd" : 18,
     "name" : "Paraguacu Paulista",
     "uf" : "SP"
   },
   {
     "id": 321,
     "ddd" : 18,
     "name" : "Parapua",
     "uf" : "SP"
   },
   {
     "id": 322,
     "ddd" : 18,
     "name" : "Pauliceia",
     "uf" : "SP"
   },
   {
     "id": 323,
     "ddd": 18,
     "name": "Pedrinhas Paulista",
     "uf": "SP"
   },
   {
     "id": 324,
     "ddd" : 18,
     "name" : "Penapolis",
     "uf" : "SP"
   },
   {
     "id": 325,
     "ddd" : 18,
     "name" : "Pereira Barreto",
     "uf" : "SP"
   },
   {
     "id": 326,
     "ddd" : 18,
     "name" : "Piacatu",
     "uf" : "SP"
   },
   {
     "id": 327,
     "ddd" : 18,
     "name" : "Piquerobi",
     "uf" : "SP"
   },
   {
     "id": 328,
     "ddd" : 18,
     "name" : "Pirapozinho",
     "uf" : "SP"
   },
   {
     "id": 329,
     "ddd" : 18,
     "name" : "Planalto",
     "uf" : "SP"
   },
   {
     "id": 330,
     "ddd" : 18,
     "name" : "Platina",
     "uf" : "SP"
   },
   {
     "id": 331,
     "ddd": 18,
     "name": "Pracinha",
     "uf": "SP"
   },
   {
     "id": 332,
     "ddd": 18,
     "name" : "Presidente Bernardes",
     "uf" : "SP"
   },
   {
     "id": 333,
     "ddd" : 18,
     "name" : "Presidente Epitacio",
     "uf" : "SP"
   },
   {
     "id": 334,
     "ddd" : 18,
     "name" : "Presidente Prudente",
     "uf" : "SP"
   },
   {
     "id": 335,
     "ddd" : 18,
     "name" : "Presidente Venceslau",
     "uf" : "SP"
   },
   {
     "id": 336,
     "ddd" : 18,
     "name" : "Quata",
     "uf" : "SP"
   },
   {
     "id": 337,
     "ddd" : 18,
     "name" : "Rancharia",
     "uf" : "SP"
   },
   {
     "id": 338,
     "ddd" : 18,
     "name" : "Regente Feijo",
     "uf" : "SP"
   },
   {
     "id": 339,
     "ddd" : 18,
     "name" : "Ribeirão Dos Indios",
     "uf" : "SP"
   },
   {
     "id": 340,
     "ddd" : 18,
     "name" : "Ribeirão Dos Indios",
     "uf" : "SP"
   },
   {
     "id": 341,
     "ddd" : 18,
     "name" : "Rinopolis",
     "uf" : "SP"
   },
   {
     "id": 342,
     "ddd" : 18,
     "name" : "Rosana",
     "uf" : "SP"
   },
   {
     "id": 343,
     "ddd" : 18,
     "name" : "Rubiacea",
     "uf" : "SP"
   },
   {
     "id": 344,
     "ddd" : 18,
     "name" : "Sagres",
     "uf" : "SP"
   },
   {
     "id": 345,
     "ddd" : 18,
     "name" : "Salmourão",
     "uf" : "SP"
   },
   {
     "id": 346,
     "ddd" : 18,
     "name" : "Sandovalina",
     "uf" : "SP"
   },
   {
     "id": 347,
     "ddd" : 18,
     "name" : "Santa Mercedes",
     "uf" : "SP"
   },
   {
     "id": 348,
     "ddd" : 18,
     "name" : "Santo Anastacio",
     "uf" : "SP"
   },
   {
     "id": 349,
     "ddd" : 18,
     "name" : "Santo Antonio Do Aracangua",
     "uf" : "SP"
   },
   {
     "id": 350,
     "ddd" : 18,
     "name" : "Santo Expedito",
     "uf" : "SP"
   },
   {
     "id": 351,
     "ddd" : 18,
     "name" : "Santopolis Do Aguapei",
     "uf" : "SP"
   },
   {
     "id": 352,
     "ddd" : 18,
     "name" : "São João Do Pau D'Alho",
     "uf" : "SP"
   },
   {
     "id": 353,
     "ddd" : 18,
     "name" : "Sud Mennucci",
     "uf" : "SP"
   },
   {
     "id": 354,
     "ddd" : 18,
     "name" : "Suzanapolis",
     "uf" : "SP"
   },
   {
     "id": 355,
     "ddd" : 18,
     "name" : "Taciba",
     "uf" : "SP"
   },
   {
     "id": 356,
     "ddd" : 18,
     "name" : "Tarabai",
     "uf" : "SP"
   },
   {
     "id": 357,
     "ddd" : 18,
     "name" : "Taruma",
     "uf" : "SP"
   },
   {
     "id": 358,
     "ddd" : 18,
     "name" : "Teodoro Sampaio",
     "uf" : "SP"
   },
   {
     "id": 359,
     "ddd" : 18,
     "name" : "Tupi Paulista",
     "uf" : "SP"
   },
   {
     "id": 360,
     "ddd" : 18,
     "name" : "Turiuba",
     "uf" : "SP"
   },
   {
     "id": 361,
     "ddd" : 18,
     "name" : "Valparaiso",
     "uf" : "SP"
   },
   {
     "id": 362,
     "ddd" : 18,
     "name" : "Zacarias",
     "uf" : "SP"
   }     
 ];

 export default citys;