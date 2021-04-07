let arrSV = [
    {id:1,ten:'tin'}
]

// khai báo hàm generator function => trả về nhiều giá trị sau nhiều lần gọi
function * themSinhVien(sv){ 

    yield [...arrSV,sv] // yield giống lệnh return

    yield 'thêm sinh viên thành công'
   
    return 'aye';
}

function main(){

    let sv = {id:2,ten:'an'}

    // muốn gọi hàm phải gán cho biến đối tượng iterator
    const iterator = themSinhVien(sv)

    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

    /**
     * next() sẽ trả ra 2 giá trị là "value" and "done"
     *  + value => là giá trị cần lấy ra ở yield
     *  + done => cũng trả ra 2 giá trị "true" and "false" . "true" có nghĩa đã chạy hết yield, "false" chưa chạy hết yield
     */

}

main()