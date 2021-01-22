import * as Repository from '@/components/Repository';

export default function Home() {
  return (
    <main className="-mt-24 pb-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="sr-only">Profile</h1>

        <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
          <div className="grid grid-cols-1 gap-4 lg:col-span-2">
            <section aria-labelledby="profile-overview-title">
              <div className="rounded-lg bg-white overflow-hidden shadow">
                <h2 className="sr-only" id="profile-overview-title">
                  Profile Overview
                </h2>
                <div className="bg-white p-6">
                  <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="sm:flex sm:space-x-5">
                      <div className="flex-shrink-0">
                        <img
                          className="mx-auto h-20 w-20 rounded-full"
                          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                        />
                      </div>
                      <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                        <p className="text-sm font-medium text-gray-600">
                          Welcome back,
                        </p>
                        <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                          Rebecca Nicholas
                        </p>
                        <p className="text-sm font-medium text-gray-600">
                          Product Designer
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 flex justify-center sm:mt-0">
                      <a
                        href="#"
                        className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        View profile
                      </a>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                  <div className="px-6 py-5 text-sm font-medium text-center">
                    <span className="text-gray-900">12</span>
                    <span className="text-gray-600">Vacation days left</span>
                  </div>

                  <div className="px-6 py-5 text-sm font-medium text-center">
                    <span className="text-gray-900">4</span>
                    <span className="text-gray-600">Sick days left</span>
                  </div>

                  <div className="px-6 py-5 text-sm font-medium text-center">
                    <span className="text-gray-900">2</span>
                    <span className="text-gray-600">Personal days left</span>
                  </div>
                </div>
              </div>
            </section>

            <Repository.List />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <section aria-labelledby="announcements-title">
              <div className="rounded-lg bg-white overflow-hidden shadow">
                <div className="p-6">
                  <h2
                    className="text-base font-medium text-gray-900"
                    id="announcements-title"
                  >
                    Announcements
                  </h2>
                  <div className="flow-root mt-6">
                    <ul className="-my-5 divide-y divide-gray-200">
                      <li className="py-5">
                        <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                          <h3 className="text-sm font-semibold text-gray-800">
                            <a
                              href="#"
                              className="hover:underline focus:outline-none"
                            >
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              />
                              Office closed on July 2nd
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                            Cum qui rem deleniti. Suscipit in dolor veritatis
                            sequi aut. Vero ut earum quis deleniti. Ut a sunt
                            eum cum ut repudiandae possimus. Nihil ex tempora
                            neque cum consectetur dolores.
                          </p>
                        </div>
                      </li>

                      <li className="py-5">
                        <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                          <h3 className="text-sm font-semibold text-gray-800">
                            <a
                              href="#"
                              className="hover:underline focus:outline-none"
                            >
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              />
                              New password policy
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                            Alias inventore ut autem optio voluptas et
                            repellendus. Facere totam quaerat quam quo
                            laudantium cumque eaque excepturi vel. Accusamus
                            maxime ipsam reprehenderit rerum id repellendus
                            rerum. Culpa cum vel natus. Est sit autem mollitia.
                          </p>
                        </div>
                      </li>

                      <li className="py-5">
                        <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                          <h3 className="text-sm font-semibold text-gray-800">
                            <a
                              href="#"
                              className="hover:underline focus:outline-none"
                            >
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              />
                              Office closed on July 2nd
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                            Tenetur libero voluptatem rerum occaecati qui est
                            molestiae exercitationem. Voluptate quisquam iure
                            assumenda consequatur ex et recusandae. Alias
                            consectetur voluptatibus. Accusamus a ab dicta et.
                            Consequatur quis dignissimos voluptatem nisi.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      View all
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section aria-labelledby="recent-hires-title">
              <div className="rounded-lg bg-white overflow-hidden shadow">
                <div className="p-6">
                  <h2
                    className="text-base font-medium text-gray-900"
                    id="recent-hires-title"
                  >
                    Recent Hires
                  </h2>
                  <div className="flow-root mt-6">
                    <ul className="-my-5 divide-y divide-gray-200">
                      <li className="py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                              alt=""
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              Leonard Krasner
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              @leonardkrasner
                            </p>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </li>

                      <li className="py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                              alt=""
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              Floyd Miles
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              @floydmiles
                            </p>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </li>

                      <li className="py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                              alt=""
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              Emily Selman
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              @emilyselman
                            </p>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </li>

                      <li className="py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                              alt=""
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              Kristin Watson
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              @kristinwatson
                            </p>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      View all
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
