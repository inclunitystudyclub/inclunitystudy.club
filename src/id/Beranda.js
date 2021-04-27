import React, { Component } from "react";
import { Icon, InlineIcon } from '@iconify/react';
import panelAdd from '@iconify/icons-uil/panel-add';
import cellIcon from '@iconify/icons-uil/cell';
import bookOpen from '@iconify/icons-uil/book-open';
import shareAlt from '@iconify/icons-uil/share-alt';
import gameStructure from '@iconify/icons-uil/game-structure';
import awardIcon from '@iconify/icons-uil/award';
import layerGroup from '@iconify/icons-uil/layer-group';
import clipboardNotes from '@iconify/icons-uil/clipboard-notes';
import commentQuestion from '@iconify/icons-uil/comment-question';
import instagramIcon from '@iconify/icons-uil/instagram';

import LandingPageUmum from "../container/LandingPageUmum"
// import ConstContent from "../component/ConstContent"
import Btn from "../container/Btn"
import Card from "../container/Card"
import Illust2 from "../assets/2.png"
import Illust3 from "../assets/3.png"
import Illust4 from "../assets/4.png"
import BidKel1 from "../assets/bidkel1.png"
import BidKel2 from "../assets/bidkel2.png"
import BidKel3 from "../assets/bidkel3.png"
import ListPoint from "../container/ListPoint";
import FooterForBeranda from "../container/FooterForBeranda"
 
class Beranda extends Component {
  render() {
    return (
      <div>
        {/* <ConstContent/> */}
        <LandingPageUmum/>

        {/* First Section Content*/}
        <div className="container">
          <div className="row sc-bg-color sc-section-container no-mg">
            <div className="col-md-9 mx-auto sc-d-flex sc-landingpage sc-section-content sc-pd-top-8rem">
              <div className="col-md-5 col-xs-12 align-self-center sc-illust-hide">
                  <img src={Illust2} width="100%" alt="inclunity-study-club"></img>
              </div>
              <div className="col-md-7 col-xs-12 pd-lf-30 align-self-center justify-content-end">
                <div className="">
                  <h2>
                      Apa sih <br/><text className="sc-incluname">INCL<text className="sc-incluname-yellow">UNITY</text></text> itu?
                  </h2>
                  <p>
                    INCLUNITY merupakan salah satu Study Club yang dibentuk oleh Para Mahasiswa di Teknik Informatika, Universitas Muhammadiyah Riau. Study Club ini memiliki bidang kelas studi yang umumnya banyak diminati dikalangan mahasiswa, terutama mahasiswa baru yang tertarik untuk mengikuti UKM yang ada di kampus sesuai minat dan bakat yang dimilikinya.
                  </p>
                  <Btn btnClass={"sc-btn2"} btnContent="Cus, Kepoin Yuk!"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section Content */}
        <div className="container">
          <div className="row sc-bg-color sc-section-container no-mg">
            <div className="col-md-9 mx-auto sc-landingpage sc-section-content">
              <div className="col-md-12 col-xs-12 align-self-center sc-text-center">
                <h3>
                  Bidang kelas studi yang tersedia
                </h3>
                <p>
                  Pilihan bidang kelas studi memiliki waktu dan jadwal pelaksanaan yang berbeda-beda. Silahkan menyesuaikan dengan jadwal kuliah dan kesibukan masing-masing ya, biar gak bentrok
                </p>
              </div>
              <div className="row align-items-center justify-content-between sc-card-row-mob sc-pd-top-2rem">
              <Card
                CardThumb={BidKel1}
                CardNameBidKel={"Graphic Design"}
                CardJadwal={"Sabtu"}
                CardWaktu={"16:00"}
                CardBtn={"Intip Kelasnya Yuk!"}
              />
              <Card
                CardThumb={BidKel2}
                CardNameBidKel={"Web Development"}
                CardJadwal={"Sabtu"}
                CardWaktu={"16:00"}
                CardBtn={"Intip Kelasnya Yuk!"}
              />
              <Card
                CardThumb={BidKel3}
                CardNameBidKel={"Video Editing"}
                CardJadwal={"Ahad"}
                CardWaktu={"19:00"}
                CardBtn={"Intip Kelasnya Yuk!"}
              />
              </div>
            </div>
          </div>
        </div>

        {/* Third Section Content */}
        <div className="container">
          <div className="row sc-bg-color sc-section-container no-mg">
            <div className="col-md-9 mx-auto sc-d-flex sc-landingpage sc-section-content">
              <div className="col-md-7 col-xs-12 pd-lf-30 align-self-center justify-content-end">
                <div className="">
                  <h3>
                    Apa sih Benefit yang kamu dapatkan di Study Club ini?
                  </h3>
                  <br></br>
                  <ListPoint
                    iconListPoint={<Icon icon={panelAdd} style={{color: '#fecd48', fontSize: '30px'}} />}
                    descListPoint={"Peningkatan Hard skill dan Soft skill dengan mumpuni"}
                  />
                  <ListPoint
                    iconListPoint={<Icon icon={cellIcon} style={{color: '#fecd48', fontSize: '30px'}} />}
                    descListPoint={"Konsep pembelajaran tatap muka mirip seperti Pelatihan atau Bootcamp, dengan sistem diskusi berkelompok dan tanya jawab"}
                  />
                  <ListPoint
                    iconListPoint={<Icon icon={bookOpen} style={{color: '#fecd48', fontSize: '30px'}} />}
                    descListPoint={"Materi berupa Praktikum yang tidak akan didapatkan di kelas mata kuliah biasa"}
                  />
                  <ListPoint
                    iconListPoint={<Icon icon={shareAlt} style={{color: '#fecd48', fontSize: '30px'}} />}
                    descListPoint={"Materi yang bebas diakses kapan saja dan boleh dibagikan kepada siapa saja sekalipun ia bukan peserta Study Club"}
                  />
                  <ListPoint
                    iconListPoint={<Icon icon={gameStructure} style={{color: '#fecd48', fontSize: '30px'}} />}
                    descListPoint={"Kerjasama didalam Tim dengan baik"}
                  />
                  <ListPoint
                    iconListPoint={<Icon icon={awardIcon} style={{color: '#fecd48', fontSize: '30px'}} />}
                    descListPoint={"Relasi dan peluang keikutsertaan dalam berbagai kegiatan dan/atau kompetisi kemahasiswaan"}
                  />
                  <ListPoint
                    iconListPoint={<Icon icon={layerGroup} style={{color: '#fecd48', fontSize: '30px'}} />}
                    descListPoint={"Dan lain sebagainya yang gak bisa disebutkan satu-satu heheh :)"}
                  />
                  <Btn btnClass={"sc-btn2 sc-btn-for-alur"} btnContent="Lihat Alur Belajar"/>
                </div>
              </div>
              <div className="col-md-5 col-xs-12 align-self-center sc-illust-hide">
                  <img src={Illust3} width="100%" alt="inclunity-study-club"></img>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Section Content */}
        <div className="container">
          <div className="row sc-bg-color sc-section-container no-mg">
            <div className="col-md-9 mx-auto sc-landingpage sc-section-content">
              <div className="col-md-12 col-xs-12 align-self-center sc-text-center">
                <h3>
                  Tertarik untuk bersamaku selamanya? Ehh maksudnya bergabung bersama kami?, hehehe
                </h3>
              </div>
              <br></br>
              <div className="row sc-row-mob">
                <div className="col-md-6 col-xs-12 align-self-center">
                  <p>
                    <Icon icon={clipboardNotes} style={{color: '#fecd48', fontSize: '120px'}} />
                    <br></br>
                    Jika kamu tertarik untuk bergabung di Study Club ini, kamu dapat melakukan pendaftaran dan pilih bidang kelas studi yang kamu mau. Jangan lupa dilihat dulu ya <b>Ketentuan Pendaftaran</b>nya sebelum mendaftar dan lihat Persyaratan masing-masing bidang kelas studi
                  </p>
                  <Btn btnClass={"sc-btn2"} btnContent="Yoklah Daftar"/>
                </div>
                <div className="col-md-6 col-xs-12 pd-lf-30 align-self-center justify-content-end">
                  <p>
                    <Icon icon={commentQuestion} style={{color: '#fecd48', fontSize: '120px'}} />
                    <br></br>
                    Atau jika kamu ragu dan bener-bener ada yang mau ditanyakan, boleh menghubungi nomor kontak yang telah disediakan ataupun baca-baca Pertanyaan yang Sering Diajukan (FAQ), mana tau pertanyaan kamu udah ada jawabannya disini
                  </p>
                  <Btn btnClass={"sc-btn2"} btnContent="FAQ dan Kontak"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fifth Section Content */}
        <div className="container">
           <div className="row sc-beforefooter-bg no-mg">
                <div className="col-md-9 mx-auto sc-d-flex sc-beforefooter">
                    <div className="col-md-5 col-xs-12 align-self-center sc-illust-hide">
                        <img src={Illust4} width="80%" alt="inclunity-study-club"></img>
                    </div>
                    <div className="col-md-7 col-xs-12 align-self-center">
                        <div className="">
                            <h3>
                              Jangan sampai ketinggalan Informasi
                            </h3>
                            <br></br>
                            <p>
                              Follow Instagram <text>@inclunitystudy.club</text> untuk terus mendapatkan update informasi terbaru dan konten-konten seru yang pastinya bermanfaat buat kawan-kawan <b>INCLUNITERS</b> semua 😁
                            </p>
                            <a className="sc-btn1 sc-landindpage-btn"><Icon icon={instagramIcon} style={{color: '#ffffff', fontSize: '22px'}} />  Instagram</a>
                        </div>
                    </div>
                </div>
            </div> 
        </div>

        {/* Last Section Content */}
        <FooterForBeranda/>

      </div>
    );
  }
}
 
export default Beranda;