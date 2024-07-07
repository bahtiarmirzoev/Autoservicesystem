import React from "react";
import { FaOilCan } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";

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
        <div class="flex gap-4 items-start">
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

        <div class="flex gap-4 items-start">
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
              idarəsini yaxşılaşdırır.{" "}
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
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

        <div class="flex gap-4 items-start">
          <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
            >
              <path
                d="M4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88072 3.11929 7 4.5 7C5.88072 7 7 5.88072 7 4.5C7 3.11929 5.88072 2 4.5 2ZM3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5ZM10.5 2C9.11929 2 8 3.11929 8 4.5C8 5.88072 9.11929 7 10.5 7C11.8807 7 13 5.88072 13 4.5C13 3.11929 11.8807 2 10.5 2ZM9 4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5C12 5.32843 11.3284 6 10.5 6C9.67157 6 9 5.32843 9 4.5ZM2 10.5C2 9.11929 3.11929 8 4.5 8C5.88072 8 7 9.11929 7 10.5C7 11.8807 5.88072 13 4.5 13C3.11929 13 2 11.8807 2 10.5ZM4.5 9C3.67157 9 3 9.67157 3 10.5C3 11.3284 3.67157 12 4.5 12C5.32843 12 6 11.3284 6 10.5C6 9.67157 5.32843 9 4.5 9ZM10.5 8C9.11929 8 8 9.11929 8 10.5C8 11.8807 9.11929 13 10.5 13C11.8807 13 13 11.8807 13 10.5C13 9.11929 11.8807 8 10.5 8ZM9 10.5C9 9.67157 9.67157 9 10.5 9C11.3284 9 12 9.67157 12 10.5C12 11.3284 11.3284 12 10.5 12C9.67157 12 9 11.3284 9 10.5Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <div>
            <h3 class="font-semibold text-xl">Əyləc Sistemi Təmirı</h3>
            <p class="mt-1 text-gray-500">
              {" "}
              We make sure our plugins are working perfectly with all modern
              browsers available such as Chrome, Firefox, Safari.{" "}
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
            >
              <path
                d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <div>
            <h3 class="font-semibold text-xl">Clean Code</h3>
            <p class="mt-1 text-gray-500">
              {" "}
              We strictly follow a set of guidelines along with unit tests to
              make sure your implementation as easy as possible.{" "}
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
            >
              <path
                d="M7.28856 0.796908C7.42258 0.734364 7.57742 0.734364 7.71144 0.796908L13.7114 3.59691C13.8875 3.67906 14 3.85574 14 4.05V10.95C14 11.1443 13.8875 11.3209 13.7114 11.4031L7.71144 14.2031C7.57742 14.2656 7.42258 14.2656 7.28856 14.2031L1.28856 11.4031C1.11252 11.3209 1 11.1443 1 10.95V4.05C1 3.85574 1.11252 3.67906 1.28856 3.59691L7.28856 0.796908ZM2 4.80578L7 6.93078V12.9649L2 10.6316V4.80578ZM8 12.9649L13 10.6316V4.80578L8 6.93078V12.9649ZM7.5 6.05672L12.2719 4.02866L7.5 1.80176L2.72809 4.02866L7.5 6.05672Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <div>
            <h3 class="font-semibold text-xl">Well Maintained</h3>
            <p class="mt-1 text-gray-500">
              {" "}
              This templatte is actively maintained by the core plugin team. We
              are working on fixing each of the issues reported.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
