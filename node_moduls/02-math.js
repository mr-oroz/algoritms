for (let x=2; x<11; x=x+0.00000001){
    const res = x +2*x**2 + 3*x**3 + 5*x**4
    if ((res - 124) < 0.00001 && (res - 124) > 0){
        console.log(res,x)
        break;
    }
}
