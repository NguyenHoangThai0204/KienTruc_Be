import Diem from "../models/Diem.js";
// createDiem
const createDiem = (newDiem) => {
    return new Promise(async (resolve, reject) => {
        const { maSV, maLopHocPhan, tenMonHoc, diemLT, diemTH, diemGK, diemCK, diemTongKet, diem4, diemChu, xepLoai, dat } = newDiem;

        try {
            const checkDiem = await Diem.findOne({
                maSV: maSV,
                maLopHocPhan: maLopHocPhan,
            });
            if (checkDiem !== null) {
                resolve({
                    status: 'ERR',
                    massage: 'Diem already exists',
                });
            }
            const createDiem = await Diem.create({
                maSV,
                maLopHocPhan,
                tenMonHoc,
                diemLT,
                diemTH,
                diemGK,
                diemCK,
                diemTongKet,
                diem4,
                diemChu,
                xepLoai,
                dat,
            });
            if (createDiem) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createDiem,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    createDiem,
}