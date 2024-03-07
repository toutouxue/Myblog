
<template>
 <section class=" pt-5 pb-3">
        <div class="container" style="max-width: 1200px; max-height: 650px;">
            <div class="row">
                <div class="col-md-10 col-lg-8 col-xl-6 mx-auto" >
                        <div class="p-4 p-sm-5 bg-primary bg-opacity-10 rounded">
                            <h2>
                                Create your free account
                            </h2>
                            <form class="mt-4">
                                <div class="mb-3">
                                    <label class="form-label">
                                        Email address
                                    </label>
                                    <input type="email" class=" form-control" id="logupEmail"/>
                                    <label class="form-label">
                                        We'll never share your email with anyone else.
                                    </label>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" >
                                        Password
                                    </label>
                                    <input type="password" class=" form-control"  id="logupPassword"/>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" >
                                        Password
                                    </label>
                                    <input type="password" class=" form-control"  id="logupConfirmPassword"/>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class=" form-check-input" id="logupCheck">
                                    <label class=" form-check-label">
                                        Yes i'd also like to sign up for additional subscription
                                    </label>
                                </div>
                                <div class="row align-items-center">
                                    <div class=" col-4">
                                        <button type="submit" class="btn btn-success">
                                            Sign me in
                                        </button>
                                    </div>
                                    <div class=" col-8 text-end">
                                        <span>
                                            Have an account?
                                            <a><RouterLink to="/login">Sign in</RouterLink> </a>
                                        </span>
                                    </div>
                                </div>
                            </form>
                            <hr>
                            <div class="text-center">
                            <p>Sign in with your social network for quick access</p>
                            <ul class="list-unstyled d-sm-flex mt-3 justify-content-center">
                                <li class="mx-2">
                                    <a href="#" class="btn link-primary d-inline-block"><i class="fab fa-facebook-f me-2"></i> Sign in with Facebook</a>
                                </li>
                                <li class="mx-2">
                                    <a href="#" class="btn link-primary d-inline-block"><i class="fab fa-google me-2"></i> Sign in with google</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default{
        
    }
</script>