
console.log("*********FUNC DECLARATION ***********");

//Örnek 1
//******************************************************************/

//DECLARATION 

//!Parametre almamış , bir şey döndürmek (void function ) returnsuz functionlara void function demektir.

function yazdır()
{
    console.log("Merhaba");

}

yazdır(); //!invoke
yazdır();
yazdır();


console.log(typeof (yazdır)); //*function type

//Örnek2: Parametreli Fonksiyonu
//******************************* */

function selamla(isim,soyisim=' '){
    console.log(`Merhaba  ${isim}  ${soyisim}`);
}

selamla("serap","Yılmaz");
selamla("Ali");
selamla("Ayşe");