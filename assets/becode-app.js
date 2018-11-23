/* 
WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 
Your name : Huet Maxime   
Date :  14/11/18
Contact information : huet.m93@gmail.com
What does this script do ? 
*/
//Premier graphique #table1
    //créa de la div qui contiendra le graph et l'introduire dans l'HTML:
        let Graph1 = document.createElement("div");
        let x = document.getElementById("mw-content-text");
        let table1 = document.getElementById("table1");
        x.insertBefore(Graph1,table1);
        Graph1.setAttribute("id","divTable1");
    //récupération des données et création d'un tableau:
        //source des données de table1
            let tbody = table1.getElementsByTagName("tbody");
            let tr = tbody[0].getElementsByTagName("tr");
        //tableau de données:
            let donnees=[];
            let fonctionTableau=()=>{
                for (i=1;i<tr.length;i++){
                    let pays=[];
                    let th = tr[i].getElementsByTagName("th");
                    let div = th[0].getElementsByTagName("div");
                    let number = div[0].innerHTML;
                    pays.push(number);
                    let td = tr[i].getElementsByTagName("td");
                        for (y=0;y<td.length;y++){
                            let contenu = td[y].innerHTML;
                            pays.push(contenu);
                        }
                    donnees.push(pays);
                }
            }
        //conception du graphique via dimple (attention ajout du script dimple dans l'HTML)
        fonctionTableau();
        let svg = dimple.newSvg("#divTable1", 800, 600);
        data = [];
        for (i=0;i<donnees.length;i++){
            for (w=2002;w<2013;w++){
                let Annee = { "Année":w, "Infractions":donnees[i][w-2000],  "Pays": donnees[i][1] };
                if (Annee.Infractions != ":"){
                    data.push(Annee);
                }
            }
        }
        var myChart = new dimple.chart(svg, data);
        var m = myChart.addCategoryAxis("x", "Année");
        myChart.addMeasureAxis("y", "Infractions");
        myChart.addSeries("Pays", dimple.plot.line);
        myChart.addLegend(50, 20,"100%","30%", "left");
        myChart.setBounds(30,"20%","100%","70%");
        myChart.draw();


    //Deuxième graphique


    //créa de la div qui contiendra le graph et l'introduire dans l'HTML:
    let Graph2 = document.createElement("div");
    let table2 = document.getElementById("table2");
    x.insertBefore(Graph2,table2);
    Graph2.setAttribute("id","divTable2");


    //récupération des données et création d'un tableau:
    let Gbody = table2.getElementsByTagName("tbody");
    let tr2 = Gbody[0].getElementsByTagName("tr");
    //tableau de données:
    let donnees2=[];
        let fonctionTableau2=()=>{
            for (i=1;i<tr2.length;i++){
                let pays2=[];
                let th2 = tr2[i].getElementsByTagName("th");
                let div2 = th2[0].getElementsByTagName("div");
                let number2 = div2[0].innerHTML;
                pays2.push(number2);
                let td2 = tr2[i].getElementsByTagName("td");
                    for (y=0;y<td2.length;y++){
                        let contenu2 = td2[y].innerHTML;
                        pays2.push(contenu2);
                    }
                donnees2.push(pays2);
            }
        }
    //conception du graphique dimple:
    fonctionTableau2();
        let svg2 = dimple.newSvg("#divTable2", 800, 600);
        data2 = [];
        for (i=0;i<donnees2.length;i++){
            for (w=2007;w<2009;w++){
                let Annee2 = { "Année":w + "-2009", "Homicides":donnees2[i][w-2005],  "Pays": donnees2[i][1] };
                if (Annee2.Année == 2008 + "-2009"){
                    Annee2.Année = 2010 + "-2012";
                }
                data2.push(Annee2);
            }
        }
        var myChart2 = new dimple.chart(svg2, data2);
        var m2 = myChart2.addCategoryAxis("x", "Année");
        m2.addOrderRule("Année");
        myChart2.addMeasureAxis("y", "Homicides");
        myChart2.addSeries("Pays", dimple.plot.line);
        myChart2.addLegend(50, 20,"100%","30%", "left");
        myChart2.setBounds(30,"20%","100%","70%");
        myChart2.draw();