import ft1 from "../assets/img/team/Flavio.jpg";
import ft2 from "../assets/img/team/Charles.jpg";
import ft3 from "../assets/img/team/Andressa.jpg";
import ft4 from "../assets/img/team/Joao.jpg";
import ft5 from "../assets/img/team/Arte-Giga.png";
import ft6 from "../assets/img/team/Josiel.png";
import ft8 from "../assets/img/team/Will.jpg";
import ft9 from "../assets/img/team/Stefanie.jpg";
import ft10 from "../assets/img/team/miniaturaAdturbos.png";
import ft11 from "../assets/img/team/miniaturaImoveisSa.png";
import ft12 from "../assets/img/team/BannerAd.png";
import ft13 from "../assets/img/team/BannerAd1.png";
import ft14 from "../assets/img/team/BannerAd2.png";
import ft15 from "../assets/img/team/BannerAd3.png";
import ft16 from "../assets/img/team/BannerSa.png";
import ft17 from "../assets/img/team/BannerSa1.png";
import ft18 from "../assets/img/team/BannerSa2.png";
import ft19 from "../assets/img/team/BannerSa3.png";
import { FaBehance, FaGithubAlt, FaLinkedinIn } from "react-icons/fa6";

export const TeamList = [
    {
        id:1,
        nome: "Flávio Riper",
        email: "flavioriper_andrade@hotmail.com",
        heading: "CEO, Senior Software Engineer ",
        image: ft1,
        socialIcons: [
            <a
                href="https://linkedin.com/in/flavio-riper"
                target="_blank"
                rel="noopener noreferrer"
                key="linkedin"
            >
                <FaLinkedinIn style={{ color: "#0CE271" }} />
            </a>,
            <a
                href="https://github.com/flavioriper"
                target="_blank"
                rel="noopener noreferrer"
                key="github"
            >
                <FaGithubAlt style={{ color: "#0CE271" }} />
            </a>,
        ],
        sobre:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        projetos: [
            {
                id: 1,
                title: "Projeto AdTurbos",
                description: "Descrição do Projeto AdTurbos, focado em visualização de dados interativa, com blog integrado.",
                imageProject: ft10,
                imgs: [ft12, ft13, ft14, ft15],
            },
            {
                id: 2,
                title: "Projeto ImoveisSa",
                description: "Descrição do Projeto ImoveisSa, Site imobiliário com API robusta e front-end interativo, oferecendo busca avançada, detalhes de imóveis em tempo real e agendamento de visitas. Uma experiência fluida e intuitiva para o usuário..",
                imageProject: ft11,
                imgs: [ft16, ft19, ft17, ft18],
            },
        ], 
    },
    {
        id:2,
        nome: "Charles Belchior",
        email: "charlesbelchiorgs@gmail.com",
        heading: "Data Science, Analytics",
        image: ft2,
        socialIcons: [
            <a
                href="linkedin.com/in/charles-belchior"
                target="_blank"
                rel="noopener noreferrer"
                key="linkedin"
            >
                <FaLinkedinIn style={{ color: "#0CE271" }} />
            </a>,
            <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                key="github"
            >
                <FaGithubAlt style={{ color: "#0CE271" }} />
            </a>,
        ],
        sobre:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id:3,
        nome: "Andressa Tórtora",
        email: "andressatortora654@gmail.com",
        heading: "Especialista de data science, Engennheira de BI",
        image: ft3,
        socialIcons: [
            <a
                href="linkedin.com/in/andressa-tórtora-322090232"
                target="_blank"
                rel="noopener noreferrer"
                key="linkedin"
            >
                <FaLinkedinIn style={{ color: "#0CE271" }} />
            </a>,
            <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                key="github"
            >
                <FaGithubAlt style={{ color: "#0CE271" }} />
            </a>,
        ],
        sobre:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id:4,
        nome: "João Vitor",
        email: "jvitorcavalcante18@gmail.com",
        heading:"Desenvolvedor front-end",
        image: ft4,
        socialIcons: [
            <a
                href="linkedin.com/in/joaovitor-frontend-dev"
                target="_blank"
                rel="noopener noreferrer"
                key="linkedin"
            >
                <FaLinkedinIn style={{ color: "#0CE271" }} />
            </a>,
            <a
                href="https://github.com/akalinoxd"
                target="_blank"
                rel="noopener noreferrer"
                key="github"
            >
                <FaGithubAlt style={{ color: "#0CE271" }} />
            </a>,
        ],
        sobre:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        projetos: [
            {
                id: 1,
                title: "Projeto AdTurbos",
                description: "Descrição do Projeto AdTurbos, focado em visualização de dados interativa, com blog integrado.",
                imageProject: ft10,
                imgs: [ft12, ft13, ft14, ft15],
            },
            {
                id: 2,
                title: "Projeto ImoveisSa",
                description: "Descrição do Projeto ImoveisSa, Site imobiliário com API robusta e front-end interativo, oferecendo busca avançada, detalhes de imóveis em tempo real e agendamento de visitas. Uma experiência fluida e intuitiva para o usuário..",
                imageProject: ft11,
                imgs: [ft16, ft19, ft17, ft18]
            },
        ], 
    },
    {
        id:5,
        nome: "Bruno Gabriel",
        email: "bgabrielsoares26@gmail.com",
        heading: "front-end developer, Designer",
        image: ft5,
        socialIcons: [
            <a
                href="linkedin.com/in/brunogabriel26"
                target="_blank"
                rel="noopener noreferrer"
                key="linkedin"
            >
                <FaLinkedinIn style={{ color: "#0CE271" }} />
            </a>,
            <a
                href="https://github.com/flavioriper"
                target="_blank"
                rel="noopener noreferrer"
                key="github"
            >
                <FaGithubAlt style={{ color: "#0CE271" }} />
            </a>,
        ],
        sobre:"Estou começando minha jornada na área de programação, trazendo comigo uma sólida experiência como editor de vídeo e motion designer. Minha paixão por tecnologia e design me impulsionou a explorar o mundo do desenvolvimento, onde estou focado em aprender e aplicar habilidades em programação para criar soluções inovadoras e visualmente atraentes.",
        projetos: [
            {
                id: 1,
                title: "Projeto AdTurbos",
                description: "Descrição do Projeto AdTurbos, focado em visualização de dados interativa, com blog integrado.",
                imageProject: ft10,
                imgs: [ft12, ft13, ft14, ft15],
            },
            {
                id: 2,
                title: "Projeto ImoveisSa",
                description: "Descrição do Projeto ImoveisSa, Site imobiliário com API robusta e front-end interativo, oferecendo busca avançada, detalhes de imóveis em tempo real e agendamento de visitas. Uma experiência fluida e intuitiva para o usuário..",
                imageProject: ft11,
                imgs: [ft16, ft19, ft17, ft18]
            },
        ], 
    },
    {
        id:6,
        nome: "Josiel Junior",
        email: "juninhojoka11@gmail.com",
        heading: "Front-end developer",
        image: ft6,
        socialIcons: [
            <a
                href="https://www.linkedin.com/in/josiel-evangelista-junior-38b710224/"
                target="_blank"
                rel="noopener noreferrer"
                key="linkedin"
            >
                <FaLinkedinIn style={{ color: "#0CE271" }} />
            </a>,
            <a
                href="https://github.com/josielEJR"
                target="_blank"
                rel="noopener noreferrer"
                key="github"
            >
                <FaGithubAlt style={{ color: "#0CE271" }} />
            </a>,
        ],
        sobre:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        projetos: [
            {
                id: 1,
                title: "Projeto AdTurbos",
                description: "Descrição do Projeto AdTurbos, focado em visualização de dados interativa, com blog integrado.",
                imageProject: ft10,
                imgs: [ft12, ft13, ft14, ft15],
            },
            {
                id: 2,
                title: "Projeto ImoveisSa",
                description: "Descrição do Projeto ImoveisSa, Site imobiliário com API robusta e front-end interativo, oferecendo busca avançada, detalhes de imóveis em tempo real e agendamento de visitas. Uma experiência fluida e intuitiva para o usuário..",
                imageProject: ft11,
                imgs: [ft16, ft19, ft17, ft18]
            },
        ], 
    },
    // {
    //     id:7,
    //     nome: "William Maxwell ",
    //     email: "w.maxwell.al@hotmail.com",
    //     heading: "Front-End Developer, Designer Gráfico",
    //     image: ft8,
    //      socialIcons: [
    //         <a
    //             href="behance.net/wmdesign1"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             key="linkedin"
    //         >
    //             <FaBehance style={{ color: "#0CE271" }} />
    //         </a>,
    //         <a
    //             href="https://github.com/Will-Maxwell-yc"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             key="github"
    //         >
    //             <FaGithubAlt style={{ color: "#0CE271" }} />
    //         </a>,
    //     ],
    //     sobre:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    // },
    // {
    //     id:8,
    //     nome: "Stefanie Medeiros",
    //     email: "",
    //     heading:"DIREÇÃO DE ARTE, DESIGN GRÁFICO",
    //     image: ft9,
    //      socialIcons: [
    //         <a
    //             href="https://www.behance.net/stefaniemedeiros"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             key="linkedin"
    //         >
    //             <FaBehance style={{ color: "#0CE271"  }} />
    //         </a>,
    //         <a
    //             href=""
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             key="github"
    //         >
    //             <FaGithubAlt style={{ color: "#0CE271" }} />
    //         </a>,
    //     ],
    //     sobre:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    // },
]