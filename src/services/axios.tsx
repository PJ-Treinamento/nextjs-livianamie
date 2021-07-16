import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { CookieParseOptions } from 'cookie';
import { GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';
import { ParsedUrlQuery } from 'querystring';

export function getApi(ctx?: GetServerSidePropsContext<ParsedUrlQuery>) {
    const { '@Pipiuwer:token': token } = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'https://piupiuwer.polijrinternal.com'
    });

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }

    return api;
}
