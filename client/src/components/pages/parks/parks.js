<div class="container text-center">
    <h4 class="logo-font md-brand">Where Will Your Dog Play Next?</h4>
    <div class="space-top">
        <a class="btn btn-lg btn-rounded add-btn" href="/parks/new">Add A New Park!</a>
    </div>
</div>

    <div class="container show-page">
        <div class="row">
            <div class="col-md-3">
                <div class="list-group">
                    <li class="list-group-item active">Info</li>
                    <li class="list-group-item">Location - Coming Soon</li>
                    <li class="list-group-item">Features - Coming Soon</li>
                </div>
                <div class="space-top">
                    <a class="back-btn" href="/parkss"><i class="fas fa-arrow-left"></i></a>
                </div>
            </div>
            <div class="col-md-9 space-bottom">
                <div class="card detail-card">
                    <img class="img-responsive" src="park.image">
                        <div class="card-body">
                            <h6 class="float-right">Free</h6>
                            <h4>{park.name}</h4>
                            <p>{park.description}</p>
                            <p>
                                <em>
                                    Submitted by {park.author.username},
                        </em>
                            </p>

                        </div>
            </div>
                    <div class="card detail-card space-top card-body">
                        <div class="text-right">
                            <a class="btn btn-rounded btn-md add-btn" href="/parks/comments/new">Add a Comment</a>
                        </div>
                        <hr>
                            {park.comments.forEach(function (comment) }
                            <div class="row">
                                <div class="col-md-12">
                                    <strong>{comment.author.username}strong>
                            <p>{comment.text}</p>
                                </form>

                                </div>
                            </div>
            </div>
                    </div>
                </div>
            </div>


            <div class="container space-bottom">
                <div class="row text-center" style="display: flex; flex-wrap: wrap;">
                    <div class="col-12">
                        <h3 class="section-heading">Check Out Previously Looked At Parks</h3>
                    </div>

                    {parks.forEach(function (park) }
                    <div class="col-md-3 col-sm-6 preview-cards">
                        <div class="card">
                            <img class="preview-img" src="park.image" alt="park.name Image">
                                <div class="caption">
                                    <p>{park.name}</p>
                                </div>
                                <p>
                                    <a href="/parks" class="btn btn-sm btn-rounded info-btn">More Info</a>
                                </p>
                </div>
                        </div>

                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <h1 class="form-heading text-center">New Parks</h1>
                                </div>
                                <div class="col-12">
                                    <form action="/parks" method="POST" enctype="multipart/form-data">
                                        <div class="form-group">
                                            <input id="input" class="form-control" type="text" name="park[name]" placeholder="name">
                </div>
                                            <div class="form-group">
                                                <label for="park-image">Image</label>
                                                <input type="file" id="park-image" name="image" accept="image/*" required>
                </div>
                                                <div class="form-group">
                                                    <input id="input" class="form-control" type="text" name="park[description]" placeholder="description">
                </div>
                                                    <div class="form-group text-center">
                                                        <button type="submit" class="btn btn-lg btn-rounded add-btn">Submit</button>
                                                    </div>
            </form>
                                                <a class="back-btn" href="/parks"><i class="fas fa-arrow-left"></i></a>
                                            </div>
                                        </div>
</div>

                                    <div class="container">
                                        <div class="row">
                                            <div class="col-12">
                                                <h1 class="form-heading text-center">Edit {park.name}</h1>
                                            </div>
                                            <div class="col-12">
                                                <form action="/parks" method="POST">
                                                    <div class="form-group">
                                                        <input class="form-control" type="text" name="park[name]" value="park.name" placeholder="name">
                </div>
                                                        <div class="form-group">
                                                            <input class="form-control" type="text" name="park[image]" value="park.image" placeholder="image url">
                </div>
                                                            <div class="form-group">
                                                                <input class="form-control" type="text" name="park[description]" value="park.description" placeholder="description">
                </div>
                                                                <div class="form-group">
                                                                    <button type="submit" class="btn btn-danger btn-block"></button>
                                                                </div>
            </form>
                                                            <a href="/parks">Back</a>
                                                        </div>
                                                    </div>
</div>
