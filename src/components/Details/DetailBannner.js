/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom'

export default function DetailBannner() {
  return (
    <div className="container-fluid bg-secondary mb-5">
      <div className="d-flex flex-column align-items-center justify-content-center min-height">
        <h1 className="font-weight-semi-bold text-uppercase mb-3">Shop Detail</h1>
        <div className="d-inline-flex">
          <p className="m-0">
            <Link to="/">
              <a>Home</a>
            </Link>
          </p>
          <p className="m-0 px-2">-</p>
          <p className="m-0">Shop Detail</p>
        </div>
      </div>
    </div>
  )
}
