<template>
    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-violet">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a
                            class="d-flex align-items-center pb-3 text-white mb-md-0 me-md-auto text-decoration-none">
                        <span class="fs-5 d-none d-sm-inline">Навигация</span>
                    </a>
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start "
                        id="menu">
                        <li class="nav-item">
                            <a href="#" class="nav-link align-middle px-0">
                                <i class="fs-4 bi-house"></i> <span
                                    class="ms-1 d-none d-sm-inline text-white ">Профиль</span>
                            </a>
                        </li>
                        <li>
                            <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-speedometer2"></i> <span
                                    class="ms-1 d-none d-sm-inline text-white ">Онбординг</span> </a>
                            <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                <li class="w-100">
                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline text-white ">Дорожная карта</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline text-white ">Обучение</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-table"></i> <span
                                    class="ms-1 d-none d-sm-inline text-white ">Прогресс</span></a>
                        </li>
                        <li>
                            <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                                <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline  text-white">Новости</span></a>
                            <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                <li class="w-100">
                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline  text-white">Лента новостей</span>
                                        <span class="text-green">1</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline  text-white">Уведомления</span>
                                        <span class="text-green">2</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline  text-white">База знаний</span>
                            </a>
                            <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                <li class="w-100">
                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline  text-white">Заявки</span></a>
                                </li>
                                <li>
                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline  text-white">Документы</span></a>
                                </li>
                                <li>
                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline  text-white">Документооборот</span></a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline  text-white">Сотрудники</span>
                            </a>
                        </li>
                    </ul>
                    <hr>
                </div>
            </div>
</template>


<script>
export default {
  name: "Menu",
}
</script>


<style scoped>
 .text-green {
        color: #BEE02A;
    }

    .bg-violet {
        background-color: #6953AF;
    }


    .violet-block {
        padding: 1rem;
        border: 1px solid #6953AF;
        border-radius: 1%;
    }

    .small-bold-title {
        font-weight: bold;
        display: block;
    }

    .block-button {
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 2rem;
    }

    .btn-green {
        width: 100%;
        background-color: #BEE02A;
        text-align: center;
    }
</style>