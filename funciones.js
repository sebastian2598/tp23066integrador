function cuentas()
{
    x=document.getElementById('seleccion').value;
    f=document.getElementById('cant2').value;
    parseInt(f);
    var precio=200;
    var totalest;
    var tra;
    var jun;
    var totest;
    var cantot;

if(f<1){
    f=1;
}else{
    f
}



switch(x){
    case 'estudiante':
        totalest=200*80/100;
        totest=precio-totalest;
        cantot=totest*f;
        document.getElementById('h5f').innerHTML="Total a Pagar: $"+cantot;
        break;
    case 'trainee':
        totalest=200*50/100;
        totest=precio-totalest;
        cantot=totest*f;
        document.getElementById('h5f').innerHTML="Total a Pagar: $"+cantot;
        break;
    case 'junior':
        totalest=200*15/100;
        totest=precio-totalest;
        cantot=totest*f;
        document.getElementById('h5f').innerHTML="Total a Pagar: $"+cantot;
        break;
}






}

function borrar()
{
    document.getElementById('h5f').innerHTML="Total a Pagar: $"
}