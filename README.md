<p><h1 align="center">💻 Bitwit 💳</h1></p>
<p align="center">Blog sobre programação com integração a API de pagamentos.</p>

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#aprendizados">Aprendizados</a> •
 <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>
</p>

<div id="sobre">
  <h1>📎 Sobre. </h1>
  <p>O Bitwit é um blog sobre programação, no qual os posts são restritos à autenticação do usuário. Caso esteja autenticado, terá acesso a todos os posts. Caso contrário, apenas aos posts que foram cadastrados como gratuitos. Para isso, foi feita a modelagem do conteúdo através do CMS Hygraph, a fim de suportar essa estrutura de posts, usuários e pagamentos. 
  
  Na parte de criação de novas contas de usuários, foi criado um fluxograma integrado com o checkout e os webhooks fornecidos pela Stripe. Esse fluxograma permite o cadastro de usuários apenas quando o pagamento é aprovado pela API e atualizado no banco de dados. Para isso, foi utilizado o serviço de Cookies do navegador para salvar o ID de pagamento retornado pela Stripe.

Por fim, para controlar as requisições feitas em ambiente de desenvolvimento e facilitar a criação dos testes unitários, foi utilizado a biblioteca MSW. Ela intercepta as requisições, tanto REST quanto GRAPHQL, para retornar dados fixos, criando uma "API fake". Para tratar as requisições, foi usada a biblioteca React Query, que otimiza as requisições e controla os estados da paginação dos posts.
  </p>
  <p>
    Para ver o resultado final, basta acessar: <a href="https://bitwit-souzzs.vercel.app/">Bitwit online 💻 💳</a>.
  </p>
  <img src="/public/banner-site.PNG" alt="Banner home page bitwit"/>
</div>

<div id="aprendizados">
 <h1>📚 Aprendizados. </h1>
  <p>Obs: Como o projeto é muito grande e ambrege diversas áreas, irei citar somentes alguns aprendizados</p>
 <ul>
  <li>Conceitos de SSR (Server-Side Rendering), SSG (Static Site Generation) e CSR (Client-Side Rendering).</li>
  <li>Otimização de páginas web.</li>
  <li>Configurações de SEO (Search Engine Optimization).</li>
  <li>Conceitos de design.</li>
  <li>Linguagem de consulta GraphQL, abrangendo Schemas, Queries e Mutations.</li>
  <li>Otimização de requisições à API, visando melhorar a performance da aplicação.</li>
  <li>Evitar sobrecarga de requisições na API durante o desenvolvimento.</li>
  <li>Integração avançada com a API de pagamentos Stripe.</li>
  <li>Fluxo de pagamento e proteção de rotas para garantir a segurança da aplicação.</li>
  <li>Compreensão da necessidade de criar hooks personalizados para reutilização de lógica.</li>
  <li>Utilização da Context API para gerenciamento de estados na aplicação.</li>
  <li>Criação de testes assíncronos e utilização de mocks para melhorar a qualidade do código.</li>
 </ul>
<div>

<div id="tecnologias">
  <h1>🛠 Tecnologias.</h1>
  <div>
    <a href="https://nextjs.org/"><img alt="NEXT" src="https://img.shields.io/badge/Next-black?style=for-the-badge&amp;logo=next.js&amp;logoColor=white"></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"                  alt="Typescript"></a>
    <a href="https://tailwindcss.com/"><img alt="TAILWIND" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
    </a>
    <a href="https://graphql.org/"><img src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&amp;logo=graphql&amp;logoColor=white" alt="GraphQL"></a>
    <a href="https://stripe.com/br"><img src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white" alt="Stripe"/></a>
    <a href="https://tanstack.com/query/v3/"><img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=React_Query&logoColor=white" alt="React Query"/></a>
    <a href="https://tanstack.com/query/v3/"><img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=React_Query&logoColor=white" alt="React Query"/></a>
    <a href="https://jestjs.io/pt-BR/"><img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&amp;logo=jest&amp;logoColor=white" alt="Jest"></a>
    <a href="https://testing-library.com/docs/react-testing-library/intro/"><img src="https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&amp;logo=testing-library&amp;logoColor=white" alt="Testing-Library"></a>
     </div>
</div>

<div id="autor">
  <h1>✏️ Autor.</h1>
  <p>Desenvolvimento por <a href="https://github.com/souzzs">Caio Souza</a>.</p>
  <a href="https://www.linkedin.com/in/souzzs/" target="_blank">
    <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white">
  </a>
  <a href="mailto:souzsdev@gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white">
  </a>
  <a href="https://discord.gg/BsnqGK6e" target="_blank">
    <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">
  </a>
  </p>
</div>
