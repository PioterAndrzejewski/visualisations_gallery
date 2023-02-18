const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];


const photoList = [
    { id: "https://dub01pap003files.storage.live.com/y4mM9vXhuGZUfiTdtEEt31aYD_T9BUPEVAqCNlYOZLJqyt_IUYZ1fnqqrDgSGJZuJ03WsIv5Hv8ONEnxnc9kBlmSqCdU785HCFZv9foscxBCuhZJKSoZjI5GBcIFRXk5TDzRG5Q9UNechoDXqfVf48nuVg4I2zxuyAoR_DOtP-8ucQAVmkGyegehrx_0adrJK_2tqBAjKleX5e3nz3rg4sOhXaIax2xPM65z8rJ6iXgHR8?encodeFailures=1&width=2017&height=904", width: 3000, height: 1344 },
    { id: "https://dub01pap003files.storage.live.com/y4mbjoOgojZsEnRxVo5Dx4Rd8MOY22FMJ3Y_3JKkQr7fv8taoJOGPcZeifqafnudHitVXoUpasvxhEiPeB6sZDV_qoVxbuQW_msa160WzlcBVuwsfvc2lT0-cpYgJ0-g7dhnBrMj_v8Oz2yMm48uPFcp41slYz7E2UFQaVNX4-IO7Yxwl6hRx0NCXH3gZKrr2XCmuVWuo593OjkUJ8BAb0M0dh9Uqu1eyJfhXaVP-50ePA?encodeFailures=1&width=1607&height=904", width: 2500, height: 1406 },
    { id: "https://dub01pap003files.storage.live.com/y4mpTFUu7oziDBwp-EkyESA6i6cbKobWOUwZvV-1-4oveSy3fI_XliJc5EqrrzcPFaaMGpeK6otHK9I-3vNMKnTju8qZDEAx3Er6D6d3AdnCl66Vfh5bnEDB4zbmmcd98xthxpaMwyDSf-SFEvP8U1F_KfENT44pQfDeugon6x287txVFmKE6l25z5qOE3MPyDSMmI6vhqlz0QSYfGgrNGNrdHcq8zO3A-6hlJ0s57HNcw?encodeFailures=1&width=1267&height=904", width: 3500, height: 2497 },
    { id: "https://dub01pap003files.storage.live.com/y4muBQNEQVlbCirJprol_1jYluYNEw1zDLR83DfC8tjf6lFggPErxNdk-Cpw7fKgT_PAw11Ddq3pLmr89vyx1kad2FiJXRhfjZuML8aGd2QOSrd_-IwXHXHcgUuf8uGyQ9XfbhpjbTQS7--GMnn3EkKwf5k15rK3wIy3FyHOnf0Cdr8NMW33OYul_XhNJRVh8lSC9yLAlFy3VvCCmjih9huBHnJlr5douubZchkYI9zTk0?encodeFailures=1&width=1246&height=904", width: 7874, height: 5709 },
    { id: "https://dub01pap003files.storage.live.com/y4mp8dxDHOkB2PHGzyGO-H9q6JGJ7bTGvJ7TQNEEoSIerbRO7sXUKiDfK5wwczxfOKXK1SADqT3tA6aDy2VHc4fk0Xszl-xupjUJYmKB6aM7ELULEVKK2xRooqJjusWUjb6zGQjVGWs4RHFxLc35B7cLKaXL8enoGF55_ZsX3IY1VzltvnLRrdJTcUlN0WjOsbnZTrDREQwtDRXh2FF1Yflx_MXARIu_LVLNIuMyVkxM_E?encodeFailures=1&width=1606&height=904", width: 3500, height: 1969 },
    { id: "https://dub01pap003files.storage.live.com/y4mSFO2IOmUzA7Mq1cDmFp5NOx9_xUmBs1KhFGH3zCSzNq7Q7Av5QkQj_JGttf_pkKIl5AJAH8UWxRdO_itME4cEr5eEAfUkIEZsthDeY4kUCtfxed3zpQqNxrBNQDdarQyjaODkgWDYh3zxPZReBq56KswqE74gxv7XL2UZK_1LFYQKCUeV_gDg1KpQxNHHH95MKJpxtkvItVKf5SiXs971zkgUyFwflzdgZLvwn88Xx0?encodeFailures=1&width=1719&height=904", width: 3500, height: 1840 },
    { id: "https://dub01pap003files.storage.live.com/y4mrn6w5fDseOcVu1XE68iqPyF3qxGrRjSTFuIobyEvtQiaSc6kqt-csnafTUXDOZN6_Y60xoAwpKZTPIaf2IW2KmUjKnDp__nSFtH0UAFPrKNsNgHmEva_qIdKJX4O1x-c4t-JFsT8oUlaXS7oc8kral3pE2Ahra6JGnhyXdgqeT2hBERWspBvdKUBV3vB-zkkZR0foco870aC5LjzV87JsAVqyHflOy_w_nh2Drfus_E?encodeFailures=1&width=1278&height=904", width: 3000, height: 2121 },
    { id: "https://dub01pap003files.storage.live.com/y4mHLtcLuki7DtrDdNR4ClPO8zMnFGqevr8KeOseiNFDspFaajqbkFiH_pjbQR-HytX68bkTjvDO-ameRjRgYS99qNJ4WeXbl-UB08EinDgJZC8zIH4zcU8bfLXO51FQgUFfq-ogzNpQcKQyuLzeSnM_qMSf18Pjqp6OHwDfc1CTO4-uIKUMvtqtrbNR1PTGNQA9w7d5Il6_zxt08nDYmGG56MbXj4ULxm5dEFHSdiikqk?encodeFailures=1&width=1278&height=904", width: 2000, height: 1414 },
    { id: "https://dub01pap003files.storage.live.com/y4mhtPHO891nNUZffZTZ1oWz-4pRwGqTByrbr3m-DUQHltoC3_STq2-40go7loAyeUdWAS6HO7j_2ERtafRY_nqkhC_wMeLTCOXHjCv5HEkb1lYFD43mmD17O_2kY07BbozI1aHRUfmHD1hBnefMyZlKiH3r9oWqyOr1xWUbdTqmr6v-oSoIs9GksS4uUcyAHcDpwKWSxjqEvWm3SJVqiGFW1tTQtXwTqW39rxBaJob7cw?encodeFailures=1&width=824&height=903", width: 3000, height: 3291 },
    { id: "https://dub01pap003files.storage.live.com/y4mQwtfuKsimwMVO_aqsvJ30dUSeCkiEJ0yQIIgvNApPu_RkixEuqHL2ziKKPdnOsVBv2Lpx3oUKJpOQT5ZH6BQI6t4ToGsu7buQOEyQ7UkV6d_En-BiCf_7Sx5vSpoCnBAn2WrbSpBQ4QBgcDLg1MCRgcDpPbhfqHLrVKnYP45j_6qJN09Z1jaDzJUfm3PNAzT0KjKOsYefmpD5Trjj7H4DnjJwI3my8HT7io12RLhSuI?encodeFailures=1&width=1740&height=813", width: 1740, height: 813 },
    { id: "https://dub01pap003files.storage.live.com/y4mE5H3k_6JBgtWzIf3c8JFtSPvnbKjRpUY5F5EOit-eBpcAHo-uLpYXYvjozl-vBKQsdCbxVlLQBHUIwMTIFyeYM9pIDotTK1jZ7DTSwq-TpiIMMxK3VY9YPUCDM_-kpU1itnBfvQm8io8bWXe_RJbxjzSZkMYTFi72t5zXSmiXcShNhnS_Z8dyxeIvhqylWI-6WC160PzF7h34cKTyGwg61oDXtMaRQ-bouPDMMTGAlA?encodeFailures=1&width=1456&height=904", width: 4448, height: 2761 },
    { id: "https://dub01pap003files.storage.live.com/y4m6KZzWMeBIBxd79392vCg5-R30-cDVL4EXfmMs6I8u0aU5rMpKjLYx7p2vzVEw19UXAs4wvGDzdOznWVNNMfnN777BV9r12KvnKBDIVXr7xT3uQDX1P6H8D8rL-tFB4pMN53X3b2wmGcoAYN67WulLDwMeI8vqBdaZGxbZN9DmoLv-2RsyQnzLzCug1nR48PTb-YEsCzyXc4V2vyeAdc4LMxCDBJ-E0zyvVBeqz6zinQ?encodeFailures=1&width=665&height=904", width: 2576, height: 3500 },
    { id: "https://dub01pap003files.storage.live.com/y4mOesrI4SWf9hEVmYrIwMYGjsvb73hp3SVp_AyRBHVcDG0LuxvfUNyhokIZ8yWgQWXaJorpp9Pa2hKJMoCFPy6UxOD3W6Po5Om35Lz9kl9RF2tcmafmxLFpX0o1Eijzp63WdVF15gaPjnsDI1kmkWGRdYkR3P4xt82Tfb9AzmmRU61VqMOiKgb8RKayAmnjaNwOOWxbrdDY-IEF3C_4pz1A4cold3fUEV74z-NBT7RXA0?encodeFailures=1&width=1607&height=904", width: 4500, height: 2531 },
];

const photos = photoList.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: photo.id,
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: photo.id,
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
