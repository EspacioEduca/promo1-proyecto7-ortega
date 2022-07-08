
let habilidadesp=[
    "Responsable",
    "Facil Apredizaje",
    "Amable",
    "Colaborador"
]
 let habTecnicas=[   
    "Excel",
    "Word",
    "Html",
    "Css",
    "JavaScripts"
]

for( let hab in habilidadesp){
   $(".A").append("<li> "+ habilidadesp[hab] +" </li>")
}
for( let indice in habTecnicas){
    $(".B").append("<li> "+ habTecnicas[indice] +" </li>")
 }