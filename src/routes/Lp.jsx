import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import '../css/Lp.css';
import Divisor from '../imgs/Ellipse 1.png';
import icone1 from '../imgs/icone1.png';
import icone2 from '../imgs/icone2.png';
import icone3 from '../imgs/icone3.png';
import icone4 from '../imgs/icone4.png';
import garantia from '../imgs/garantia.png';
import semfundo from '../imgs/semfundodesktop.png';
import aluna1 from '../imgs/aluna1.jpeg';
import aluna2 from '../imgs/aluna2.jpeg';
import aluna3 from '../imgs/aluna3.jpeg';
import aluna4 from '../imgs/aluna4.jpeg';

import check from '../imgs/check.png';



const Lp = () => {

    // Imagens das alunas segurando os certificados
    const images = [aluna1, aluna2, aluna3, aluna4];

    const contadorRef = useRef(null); // Criamos uma referência para o contador

    useEffect(() => {
        const contadorElemento = contadorRef.current;
        if (!contadorElemento) return;

        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    iniciarContagem();
                }
            });
        }, { threshold: 0.5 }); // 50% do elemento precisa estar visível

        observer.observe(contadorElemento);

        return () => observer.disconnect(); // Removemos o observer quando o componente desmonta
    }, []);

    function iniciarContagem() {
        let valorAtual = 0;
        const valorFinal = 800;
        const duracao = 1000; // Tempo total da animação em milissegundos
        const intervalo = 10; // Tempo entre cada incremento
        const incremento = Math.ceil(valorFinal / (duracao / intervalo));

        function atualizarContador() {
            if (valorAtual >= valorFinal) {
                contadorRef.current.innerText = valorFinal;
                return;
            }
            valorAtual += incremento;
            contadorRef.current.innerText = valorAtual;
            setTimeout(atualizarContador, intervalo);
        }

        atualizarContador();
    }



    return (
        <>
            {/* Hero Section */}
            <header className="hero">
                <div className="hero-content">
                    <h4>Seja uma Nail Designer de Sucesso!</h4>
                    <h1>Formação Nail Designer com Nicke Nails</h1>
                    <p>
                        Domine legislação, biossegurança e técnicas exclusivas de curvatura, resistência, arte e mais! Do 
                        <span class="destaque"> Básico</span> ao <span class="destaque">Avançado</span>.
                    </p>

                    <button className="btn1">Quero adquirir</button>
                </div>

                <div className="divider">
                    <img src={Divisor} alt="Divisor arredondado" />
                </div>
            </header>
            
            {/* Benefícios */}
            <section className="benefits">
                <h2>O que você vai receber</h2>
                <div className="benefits-container">
                    <div className="benefit-item"> 
                        <img src={icone1} alt="Ícone" />
                        <h3>Conhecimento de negócio</h3>
                        <p>Aprenda a gerir seu estúdio em aulas de negócio, marketing e legislação.</p>
                    </div>
                    <div className="benefit-item">
                        <img src={icone2} alt="Ícone" />
                        <h3>Arte das unhas</h3>
                        <p>Aprenda a fazer artes lindas e virais, com naturalidade e resistência.</p>
                    </div>
                    <div className="benefit-item">
                        <img src={icone3} alt="Ícone" />
                        <h3>Saúde das unhas</h3>
                        <p>Entenda sobre biossegurança, anatomia, patologia das unhas, alergias e doenças</p>
                    </div>
                    <div className="benefit-item">
                        <img src={icone4} alt="Ícone" />
                        <h3>Equipamentos Essenciais</h3>
                        <p>Entenda e conheça os equipamentos que vão ajudar e auxiliar o seu serviço.</p>
                    </div>
                </div>
            </section>

            {/* Sobre a Instrutora */}
            <section className="about">
            <h2>Quem sou eu?</h2>
            <div className="text-content">
                <p>Minha paixão por unhas começou aos 16 anos. Desde então, estudei, aprimorei minhas técnicas e ganhei experiência no mercado.</p>
                <p>Atuo há cinco anos como nail designer, uma profissão que transformou minha vida e me mostrou um enorme potencial de crescimento.</p>
                <p>Aos 22 anos, minha missão é ensinar não só a técnica, mas também estratégias para se destacar, atrair clientes e lucrar em uma das profissões que mais crescem no Brasil.</p>
            </div>
            <div className="image-container">
                <img src={semfundo} alt="Instrutora de Nail Designer" />
            </div>
            </section>

        <section className="divisao2">
            <button className="btn">Quero adquirir</button>
            <div className="conteudo">
                <span className="warning">Poucas vagas disponíveis</span>
                <p>Domine o nail designer e torne-se uma profissional de sucesso!</p>
            </div>
            </section>



            {/* Depoimentos */}
            <section className="testimonials">
                <h2>O que +<span ref={contadorRef}>0</span> alunas dizem</h2>

                {/* Carrossel de imagens */}
                <div className="testimonial-container">
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        loop={true}
                        className="testimonial-slider"
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={img} alt={`Aluna ${index + 1}`} className="testimonial-img" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

        

            <div className="container-bg">
                 {/* Divider Invertido */}
                <div className="divider inverted">
                    <img src={Divisor} alt="Divisor invertido" /> 
                </div>

            
                {/* Planos */}
                <section className="plans">
                    <h2>Escolha o melhor método para você</h2>
                    <div className="plans-container">
                        {/* Curso Presencial */}
                        <div className="plan">
                            <h3>Curso Presencial</h3>
                            <p className="price-container">
                                <span className="old-price">
                                    <span className="red-price">R$ 1.200,00</span> <span className="gray-text">por</span>
                                </span> 
                                <span className="price"><span className="currency">R$</span>800,00</span>
                            </p>
                            <button className="btn">Quero adquirir!</button>
                            <ul>
                                <li><img src={check} alt="Check" className="check-icon"/> Fibra de vidro</li>
                                <li><img src={check} alt="Check" className="check-icon"/> Gel na tips</li>
                                <li><img src={check} alt="Check" className="check-icon"/> Banho de gel</li>
                                <li><img src={check} alt="Check" className="check-icon"/> Encapsulada</li>
                                <li><img src={check} alt="Check" className="check-icon"/> Apostila impressa</li>
                                <li><img src={check} alt="Check" className="check-icon"/> Certificado</li>
                                <li><img src={check} alt="Check" className="check-icon"/> Coffee break</li>
                                <li><img src={check} alt="Check" className="check-icon"/> Acompanhamento vitalício</li>
                            </ul>
                        </div>

                        {/* Curso Online */}
                        <div className="plan">
                            <h3>Curso Online</h3>
                            <p className="price-container">
                                <span className="old-price">
                                    <span className="red-price">R$ 300,00</span> <span className="gray-text">por</span>
                                </span> 
                                <span className="price"><span className="currency">R$</span>150,00</span>
                            </p>
                            <button className="btn">Quero adquirir!</button>
                            <ul>
                                <li><img src={check} alt="Check" className="check-icon"/> Técnicas otimizadas</li>
                                <li><img src={check} alt="Check" className="check-icon"/> Teoria simplificada</li>
                                <li><img src={check} alt="Check" className="check-icon"/> Anatomia das unhas</li>
                                <li><img src={check} alt="Check" className="check-icon"/> +40 aulas de técnicas</li>
                                <li><img src={check} alt="Check" className="check-icon"/> Acesso vitalício</li>
                                <li><img src={check} alt="Check" className="check-icon"/> Suporte no WhatsApp</li>
                                <li><img src={check} alt="Check" className="check-icon"/> Apostila</li>
                                <li><img src={check} alt="Check" className="check-icon"/> Certificado</li>
                            </ul>
                        </div>
                    </div>
                </section>


                {/* Garantia */}
                <section className="garantia">
                    <img className='garantiaimg' src={garantia}></img>
                    <h2>7 DIAS PARA TESTAR SEM COMPROMISSO</h2>
                    <p>
                        Você tem 7 dias de garantia para consumir o conteúdo disponível e ver tudo que preparei para você. 
                        Se durante este período você decidir que o produto não é adequado para você ou que ainda não é o momento, tudo bem.
                    </p>
                    <p>
                        Basta solicitar o seu reembolso integralmente enviando um e-mail para o suporte de atendimento. 
                        Você receberá todo o seu dinheiro, sem perguntas nem justificativas, simples assim.
                    </p>
                </section>
             </div>


            <section className="divisao2">
            <button className="btn">Quero adquirir</button>
            <div className="conteudo">
                <span className="warning">Poucas vagas disponíveis</span>
                <p>Domine o nail designer e torne-se uma profissional de sucesso!</p>
            </div>
            </section>
        </>
    );
};

export default Lp;
