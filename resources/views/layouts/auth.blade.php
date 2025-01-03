@extends('layouts.blank', ['bodyClass' => 'account-page'])

@section('content')
    <div class="account-content">
        <div class="container">

            <!-- Account Logo -->
            <div class="account-logo">
                <a href="{{ url('/') }}"><img src="{{ asset('images/logo.png') }}" alt=""></a>
            </div>
            <!-- /Account Logo -->

            <div class="account-box">
                <div class="account-wrapper">
                    @yield('form')
                </div>
            </div>
        </div>
    </div>
@endsection
