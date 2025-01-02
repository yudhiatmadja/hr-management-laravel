@extends('layouts.app')

@push('page-styles')
    <!-- Custom CSS -->
@endpush

@section('page-content')
    <div class="content container-fluid">

        <!-- Page Header -->
        <x-breadcrumb>
            <x-slot name="title">{{ __('Profile') }}</x-slot>
            <ul class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="{{ route('dashboard') }}">{{ __('Dashboard') }}</a>
                </li>
                <li class="breadcrumb-item active">
                    {{ __('Profile') }}
                </li>
            </ul>
        </x-breadcrumb>
        <!-- /Page Header -->

        <div class="card mb-0">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="profile-view">
                            <!-- Profile Image -->
                            <div class="profile-img-wrap">
                                <div class="profile-img">
                                    <a href="#">
                                        <img src="{{ !empty($user->avatar)
                                            ? asset('storage/users/' . $user->avatar)
                                            : asset('images/user.jpg') }}"
                                            alt="User Image">
                                    </a>
                                </div>
                            </div>
                            <!-- /Profile Image -->

                            <!-- Profile Information -->
                            <div class="profile-basic">
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="profile-info-left">
                                            <h3 class="user-name m-t-0 mb-0">{{ $user->fullName }}</h3>
                                            <div class="small doj text-muted">
                                                {{ __('Date Joined') }}: {{ format_date($user->created_at, 'D M Y') }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <ul class="personal-info">
                                            @if($user->phone)
                                                <li>
                                                    <div class="title">{{ __('Phone') }}:</div>
                                                    <div class="text"><a href="tel:{{ $user->phone }}">{{ $user->phoneNumber }}</a></div>
                                                </li>
                                            @endif
                                            @if($user->email)
                                                <li>
                                                    <div class="title">{{ __('Email') }}:</div>
                                                    <div class="text"><a href="mailto:{{ $user->email }}">{{ $user->email }}</a></div>
                                                </li>
                                            @endif
                                            @if($user->address)
                                                <li>
                                                    <div class="title">{{ __('Address') }}:</div>
                                                    <div class="text">{{ $user->address }}</div>
                                                </li>
                                            @endif
                                            @if($user->gender)
                                                <li>
                                                    <div class="title">{{ __('Gender') }}:</div>
                                                    <div class="text">{{ ucfirst($user->gender) }}</div>
                                                </li>
                                            @endif
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- /Profile Information -->

                            <!-- Edit Button -->
                            <div class="pro-edit">
                                <a data-ajax-modal="true" data-title="{{ __('Profile Information') }}"
                                    data-size="lg" class="edit-icon" href="javascript:void(0)"
                                    data-url="{{ route('profile.edit') }}">
                                    <i class="fa-solid fa-pencil"></i>
                                </a>
                            </div>
                            <!-- /Edit Button -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
@endsection

@push('page-scripts')
    <!-- Custom JS -->
@endpush
