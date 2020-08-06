import React from 'react';
import Link from 'next/link';

const LogoCabecalho = () => (
    <div className="flex-2 flex flex-center">
        <Link href="/">
            <img src="/static/logo.jpg" className="logo" width="90%" />
        </Link>
    </div>
)

export default LogoCabecalho;