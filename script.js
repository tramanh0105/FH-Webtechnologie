function getViewportWidth() {
return window.innerWidth || document.documentElement.clientWidth;
}

let viewport = "Die Viewport-Breite beträgt: "+getViewportWidth()+" Pixel";
console.log(viewport);

/*Objekt Seminar*/
class Seminar{


constructor(titel, seminarleiterName, ort,jahr, monat,datum, startzeit,endzeit, freiePlaetze, verfügbarePlaetze, tutoren){
  this.titel = titel;
  this.seminarleiterName = seminarleiterName;
  this.ort = ort;
  this.startzeit = new Date(jahr,monat,datum,startzeit);
  this.endzeit = new Date(jahr,monat,datum,endzeit);
  this.freiePlaetze = freiePlaetze;
  this.verfügbarePlaetze = verfügbarePlaetze;
  this.tutoren = tutoren;
}
/*Berechnung belegter Plaetze*/

  berechnenBelegterPlaetze (verfügbarePlaetze, freiePlaetze){
  return verfügbarePlaetze - freiePlaetze;

}
}

/*Instanzen und Array*/
 let tutoren = ["ane1","tim2"];

 let seminar1 = new Seminar("NodeJs","Herr Jörges","A.E.01",2019,4,19,10,13, 12,100,tutoren);
 let seminar2 = new Seminar("Angular","Herr Jörges","A.E.01",2019,4,19,15,17, 30,100,tutoren);

//array declaration and initialization
 let arraySeminar = new Array;
 arraySeminar.push(seminar1);
 arraySeminar.push(seminar2);

 /*sorting array*/
 let sortedSeminar = arraySeminar.sort(function(a,b){
  return a.startzeit - b.startzeit;
 });
 
/*Ausgabe*/
 for(let i = 0; i< sortedSeminar.length; i ++ ){
   let s = sortedSeminar[i];
   let time = s.startzeit.toLocaleString('de-DE');
   let seat = s.berechnenBelegterPlaetze(s.verfügbarePlaetze,s.freiePlaetze);
   console.log(`${s.titel}, (${time}, ${seat} von ${s.verfügbarePlaetze} Plaetzen belegt) `);
  }
