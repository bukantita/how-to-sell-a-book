import { Modal } from 'bootstrap';
import React, { Component } from "react";
import Card from "../Components/card"


class Gallery extends Component {
    constructor() {
        super()
        this.state = {
            buku: [
                {
                    isbn: "12345", judul: "Matahari", penulis: "Tere Liye",
                    penerbit: "CV Harapan Kita", harga: 90000,
                    cover: "https://drive.usercontent.google.com/download?id=1fgW1LFZqqKUD33UygCv1GUwNgsvkCANh&authuser=0"
                },
                {
                    isbn: "12346", judul: "Hujan", penulis: "Tere Liye",
                    penerbit: "CV Nusa Bangsa", harga: 80000,
                    cover: "https://drive.usercontent.google.com/download?id=1BH9hsP0yEDYMliPWbUe2dVm2Zj0DIlAT&authuser=0"
                },
                {
                    isbn: "54321", judul: "Bumi", penulis: "Tere Liye",
                    penerbit: "CV Nusa Bangsa", harga: 70000,
                    cover: "https://drive.usercontent.google.com/download?id=1DIW8qvYb9AvK7g8WiqLjSgupnP418ZN0&authuser=0"
                },
            ],



            action: "",
            isbn: "",
            judul: "",
            penulis: "",
            penerbit: "",
            harga: 0,
            cover: "",
            selectedItem: null,
        }
    }

    Add = () => {
        // menampilkan komponen modal
        this.state.modal.show();
        this.setState({
            isbn: Math.random(1, 10000000),
            judul: "a",
            penulis: "b",
            penerbit: "c",
            cover: "d",
            harga: 0,
            action: "insert"
        })
    }

    Edit = (item) => {
        // menampilkan komponen modal
        this.state.modal.show();
        this.setState({
            isbn: item.isbn,
            judul: item.judul,
            penulis: item.penulis,
            penerbit: item.penerbit,
            cover: item.cover,
            harga: item.harga,
            action: "update",
            selectedItem: item
        })
    }

    Save = (event) => {
        event.preventDefault();
        // menampung data state buku
        let tempBuku = this.state.buku

        if (this.state.action === "insert") {
            // menambah data baru
            tempBuku.push({
                isbn: this.state.isbn,
                judul: this.state.judul,
                penulis: this.state.penulis,
                penerbit: this.state.penerbit,
                cover: this.state.cover,
                harga: this.state.harga,
            })
        } else if (this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempBuku.indexOf(this.state.selectedItem)
            tempBuku[index].isbn = this.state.isbn
            tempBuku[index].judul = this.state.judul
            tempBuku[index].penulis = this.state.penulis
            tempBuku[index].penerbit = this.state.penerbit
            tempBuku[index].cover = this.state.cover
            tempBuku[index].harga = this.state.harga
        }

        this.setState({ buku: tempBuku })

            // menutup komponen modal_buku
            this.state.modal.hide();
    }

    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            // menghapus data
            let tempBuku = this.state.buku
            // posisi index data yg akan dihapus
            let index = tempBuku.indexOf(item)

            // hapus data
            tempBuku.splice(index, 1)

            this.setState({ buku: tempBuku })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.buku.map((item, index) => (
                        <Card
                            judul={item.judul}
                            penulis={item.penulis}
                            penerbit={item.penerbit}
                            harga={item.harga}
                            cover={item.cover}
                            onEdit={() => this.Edit(item)}
                            onDrop={() => this.Drop(item)}
                        />
                    ))}
                </div>

                <button className="btn btn-success" onClick={() => this.Add()}>
                    Tambah Data
                </button>

                {/* component modal sbg control manipulasi data */}
                <div className="modal" id="modal_buku">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-header">
                                Form Buku
                            </div>
                            {/* modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Judul Buku
                                    <input type="text" className="form-control mb-2"
                                        value={this.state.judul}
                                        onChange={ev => this.setState({ judul: ev.target.value })}
                                        required />

                                    Penulis Buku
                                    <input type="text" className="form-control mb-2"
                                        value={this.state.penulis}
                                        onChange={ev => this.setState({ penulis: ev.target.value })}
                                        required />

                                    Penerbit Buku
                                    <input type="text" className="form-control mb-2"
                                        value={this.state.penerbit}
                                        onChange={ev => this.setState({ penerbit: ev.target.value })}
                                        required />

                                    Harga Buku
                                    <input type="number" className="form-control mb-2"
                                        value={this.state.harga}
                                        onChange={ev => this.setState({ harga: ev.target.value })}
                                        required />

                                    Cover Buku
                                    <input type="url" className="form-control mb-2"
                                        value={this.state.cover}
                                        onChange={ev => this.setState({ cover: ev.target.value })}
                                        required />

                                    <button className="btn btn-info btn-block" type="submit">
                                        Simpan
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.state.modal = Modal.getOrCreateInstance('#modal_buku')
    }
}


export default Gallery;