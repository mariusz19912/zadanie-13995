function kalk(a,b) {
    var suma = a+b;
    var roznica = a-b;
    var iloczyn = a*b;
    if (suma>0) {
        console.log("Wynik dodawania wynosi "+suma);
    } else {
        console.log ("Wynik jest ujemny");
    };
    if (roznica>0) {
        console.log("Wynik odejmowania wynosi "+roznica);
    } else {
        console.log ("Wynik jest ujemny");
    };
    if (iloczyn>0) {
        console.log("Wynik mnożenia wynosi "+iloczyn);
    } else {
        console.log ("Wynik jest ujemny");
    };
};
kalk(1,2); 