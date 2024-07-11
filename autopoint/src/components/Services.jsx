import React, { useState } from "react";
import Modal from "./Modal"; // Adjust the path to your Modal component
import { FaOilCan } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";
import { TbCarTurbine } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { FaFan } from "react-icons/fa";
const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });

  const openModal = (title, description) => {
    setModalContent({ title, description });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const services = [
    {
      icon: <FaOilCan />,
      title: "Yağ Dəyişdirilməsi",
      description:
        "Müntəzəm olaraq yağın dəyişdirilməsi mühərrikinizin uzun müddət problemsiz işləməsinin təminatıdır...",
    },
    {
      icon: <GiSteeringWheel />,
      title: "Təkərlərin Balanslaşdırılması",
      description:
        "Düzgün təkər balanslaşdırılması avtomobilinizin hərəkətinin təhlükəsizliyini və rahatlığını təmin edir...",
    },
    {
      icon: <PiEngineFill/>,
      title: "Mühərrikin Diaqnostikası",
      description:" Bizim mütəxəssislər mühərrikin hər bir  detalını yoxlayaraq mümkün olan problemləri vaxtında aşkar edir və aradan qaldırır. Bu, mühərrikinizin uzun ömürlü olmasını və yüksək performansını təmin edir."
    },
    {
      icon: <FaFan/>,
      title:"Kondisioner Sistemi Təmirı və Quraşdırılması",
      description:"Yay aylarında avtomobilinizin kondisioner sistemi maksimum səmərəliliklə işləməlidir. Bizim avtoservisdə kondisioner   sisteminin tam diaqnostikası, təmiri və lazım olduqda yenisinin  quraşdırılması həyata keçirilir."
    },
    {
      icon: <TbCarTurbine/>,
      title: "Turbin Sistemi Təmirı",
      description:" Turbin sistemi mühərrikinizin gücünü və səmərəliliyini artıran  mühüm bir komponentdir. Bizim avtoservisdə turbin sisteminin diaqnostikası, təmiri və ehtiyac olduqda dəyişdirilməsi həyata keçirilir. Turbin sisteminizin maksimum performansla işləməsini  təmin edirik ki, avtomobilinizin gücündə heç bir azalma olmasın."
    },
    {
      icon: <FaPlus/>,
      title: "Servis əlavə et"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-5 mt-16">
      <div className="text-center">
        <h2 className="font-semibold text-3xl">
          Avtoservis Xidmətlərinin Nəzərdən Keçirilməsi
        </h2>
        <p className="max-w-md mx-auto mt-2 text-gray-500">
          Etibarınızı Qazanan Peşəkar Xidmət
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex gap-4 items-start hover:bg-gray-100 transition duration-300 p-4 rounded-lg cursor-pointer"
            onClick={() =>
              openModal(service.title, service.description)
            }
          >
            <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
              {service.icon}
            </span>
            <div>
              <h3 className="font-semibold text-xl">{service.title}</h3>
              <p className="mt-1 text-gray-500">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalOpen}
        closeModal={closeModal}
        title={modalContent.title}
        description={modalContent.description}
      />
    </div>
  );
};

export default Services;
