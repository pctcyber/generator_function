let arrSV = [
    {id:1,ten:'tin'}
]

function * themSinhVien(sv){

    yield [...arrSV,sv]

    yield 'thêm sinh viên thành công'
   
    return 'aye';
}

function main(){

    let sv = {id:2,ten:'an'}
    const iterator = themSinhVien(sv)

    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());


}

main()