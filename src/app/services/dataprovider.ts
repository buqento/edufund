import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

let baseUrl = `https://6319bfa08e51a64d2beb602d.mockapi.io/mock/v1`

@Injectable()
export class DataProvider {

    constructor(public http: HttpClient) { }

    getImages(path: any) {
        return new Promise(resolve => {
            this.http.get(`${baseUrl}/${path}`)
                .subscribe(data => {
                    resolve(data)
                })
        })
    }

    getDocuments() {
        const documents = [
            {
                title: "Pekerja",
                description: "<li>KTP (Kartu Tanda Penduduk)</li><li>Bukti Penghasilan</li><li>Tagihan pembayaran dari institusi pendidikan (selain EduCash)</li>",
                image: "https://edufund.co.id/assets/images/icon/icon-pekerja.svg"
            },
            {
                title: "Wiraswasta",
                description: "<li>KTP (Kartu Tanda Penduduk)</li><li>Bukti Penghasilan</li><li>Tagihan pembayaran dari institusi pendidikan (selain EduCash)</li>",
                image: "https://edufund.co.id/assets/images/icon/icon-wiraswasta.svg"
            },
            {
                title: "Pelajar",
                description: "<li>KTP (Kartu Tanda Penduduk)</li><li>Tagihan pembayaran dari institusi pendidikan (selain EduCash)</li>",
                image: "https://edufund.co.id/assets/images/icon/icon-pelajar.svg"
            }
        ]
        return documents;
    }

}