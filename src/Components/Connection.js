import React from 'react'

function Connection() {
    return (
        <>
            <div class="container my-5 d-flex justify-content-center">
                <div class="row  justify-content-center ">
                    <div class="col">
                        <div class="card ">
                            <div class="card-header pb-0 bg-white border-0 text-center px-sm-4"><h6 class="text-left mt-4 font-weight-bold mb-0"><span><i class="fa fa-times-circle fa-2x mr-3 " aria-hidden="true"></i> </span > No internet connection</h6> <span class="img-1 text-center"></span> </div>
                            <div class="card-body px-sm-4 mb-3">
                                <ul class="list-unstyled text-muted"> <li>Please re-connect to the internet to continue use TextUtils.</li> <li>If you encounter problems:</li>
                                    <ul class="mt-2 inner">
                                        <li>Try restarting wireless connection on this device.</li>
                                        <li>Move close to your wireless access point.</li>
                                    </ul>
                                </ul>
                                <div class="row justify-content-end mt-4 "> <div class="col-auto"><button type="button" class="btn btn-success"><span >Try Again</span></button></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Connection