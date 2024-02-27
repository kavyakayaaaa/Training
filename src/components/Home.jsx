import React from 'react'
import Product from './Picture'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img style={{ height: 600 }}src="https://i.pinimg.com/564x/16/c4/e0/16c4e0ffbb98b8c17f39d862106a25ef.jpg" class="d-block w-100" alt="MILLET" />
    </div>
                        <div class="carousel-item">
                            <img style={{ height: 600 }}src="https://mymodernmet.com/wp/wp-content/uploads/2017/03/paintings-merged-with-photography-14.jpg" class="d-block w-100" alt="KODO MILLET"/>
    </div>
                            <div class="carousel-item">
                                <img style={{ height: 600 }}src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" class="d-block w-100" alt="MILLET" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img style={{ height: 600 }}src="https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg" class="d-block w-100" alt="MILLET" />
    </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <Product/>
                    </div>
                    )
}

                    export default Home
