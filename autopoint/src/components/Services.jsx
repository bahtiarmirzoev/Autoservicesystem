import React from "react";
import { FaOilCan } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";
import { TbCarTurbine } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { FaFan } from "react-icons/fa";
const Services = () => {
  return (
    <div class="max-w-4xl mx-auto px-5 mt-16">
      <div class="text-center">
        <h2 class="font-semibold text-3xl">
          Avtoservis Xidmətlərinin Nəzərdən Keçirilməsi
        </h2>
        <p class="max-w-md mx-auto mt-2 text-gray-500">
          Etibarınızı Qazanan Peşəkar Xidmət
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-10 mt-10">
        <div class="flex gap-4 items-start hover:bg-gray-100 transition duration-300 p-4 rounded-lg">
          <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <FaOilCan />
          </span>
          <div>
            <h3 class="font-semibold text-xl">Yağ Dəyişdirilməsi</h3>
            <p class="mt-1 text-gray-500">
              {" "}
              Müntəzəm olaraq yağın dəyişdirilməsi mühərrikinizin uzun müddət
              problemsiz işləməsinin təminatıdır. Bizim avtoservisdə
              avtomobilinizin tələblərinə cavab verən yüksək keyfiyyətli yağlar
              istifadə olunur. Peşəkar yanaşma və müasir avadanlıq yağ
              dəyişdirilməsini tez və effektiv şəkildə aparmağa imkan verir,
              avtomobilinizi mükəmməl vəziyyətdə saxlayırıq.
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-start hover:bg-gray-100 transition duration-300 p-4 rounded-lg">
          <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <GiSteeringWheel />
          </span>
          <div>
            <h3 class="font-semibold text-xl">Təkərlərin Balanslaşdırılması</h3>
            <p class="mt-1 text-gray-500">
              {" "}
              Düzgün təkər balanslaşdırılması avtomobilinizin hərəkətinin
              təhlükəsizliyini və rahatlığını təmin edir. Bizim
              mütəxəssislərimiz xüsusi avadanlıqlardan istifadə edərək
              təkərlərin balanslaşdırılmasını həyata keçirir, beləliklə
              təkərlərin qeyri-bərabər yeyilməsinin qarşısını alır və sükan
              idarəsini yaxşılaşdırır..{" "}
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-start hover:bg-gray-100 transition duration-300 p-4 rounded-lg">
          <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <PiEngineFill />
          </span>
          <div>
            <h3 class="font-semibold text-xl">Mühərrikin Diaqnostikası</h3>
            <p class="mt-1 text-gray-500">
              {" "}
              Mühərrikin vəziyyətini dəqiq diaqnostika etmək üçün müasir
              avadanlıqlarımız var. Bizim mütəxəssislər mühərrikin hər bir
              detalını yoxlayaraq mümkün olan problemləri vaxtında aşkar edir və
              aradan qaldırır. Bu, mühərrikinizin uzun ömürlü olmasını və yüksək
              performansını təmin edir.
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-start hover:bg-gray-100 transition duration-300 p-4 rounded-lg">
          <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <FaFan />
          </span>
          <div>
            <h3 class="font-semibold text-xl">
              Kondisioner Sistemi Təmirı və Quraşdırılması
            </h3>
            <p class="mt-1 text-gray-500">
              {" "}
              Yay aylarında avtomobilinizin kondisioner sistemi maksimum
              səmərəliliklə işləməlidir. Bizim avtoservisdə kondisioner
              sisteminin tam diaqnostikası, təmiri və lazım olduqda yenisinin
              quraşdırılması həyata keçirilir. Səyahətlərinizin rahat keçməsi
              üçün kondisioner sisteminizin mükəmməl işləməsini təmin edirik.{" "}
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-start hover:bg-gray-100 transition duration-300 p-4 rounded-lg">
          <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <TbCarTurbine />
          </span>
          <div>
            <h3 class="font-semibold text-xl">Turbin Sistemi Təmirı</h3>
            <p class="mt-1 text-gray-500">
              {" "}
              Turbin sistemi mühərrikinizin gücünü və səmərəliliyini artıran
              mühüm bir komponentdir. Bizim avtoservisdə turbin sisteminin
              diaqnostikası, təmiri və ehtiyac olduqda dəyişdirilməsi həyata
              keçirilir. Turbin sisteminizin maksimum performansla işləməsini
              təmin edirik ki, avtomobilinizin gücündə heç bir azalma olmasın..{" "}
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-start hover:bg-gray-100 transition duration-300 p-4 rounded-lg">
          <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <FaPlus />
          </span>
          <div>
            <h3 class="font-semibold text-xl">Yeni service elave et</h3>
            <p class="mt-1 text-gray-500"> Servisin mezmunu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
