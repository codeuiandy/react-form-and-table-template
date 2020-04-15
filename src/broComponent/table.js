import React, { Component } from 'react';
import './style.css'

export default class table extends Component {
    render() {
        return (
            <div >
           <div class="row">
								<div class="col-lg-12">
									<div class="card">
										<div class="card-header">
											<h4>Active Users</h4>
										</div>
										<div class="card-body">
											<div class="table-responsive">
												<table class="table table-bordered table-hover mb-0 text-nowrap">
													<tr>
														<th>#</th>
														<th>Name</th>
														<th>Position</th>
														<th>Date of joining</th>
														<th>Date of Re leaving</th>
														<th>projects</th>
														<th>Experience</th>
													</tr>
													<tr>
														<td>1</td>
														<td>Joshua Welch</td>
														<td>Web Designer</td>
														<td>19-6-2014</td>
														<td>19-6-2018</td>
														<td>14</td>
														<td>4 yrs</td>
													</tr>
													<tr>
														<td>2</td>
														<td>Alan	Randall</td>
														<td>Accountant</td>
														<td>21-5-2015</td>
														<td>21-5-2018</td>
														<td>10</td>
														<td>3 yrs</td>
													</tr>
													<tr>
														<td>3</td>
														<td>Jack	Greene</td>
														<td>App Developer</td>
														<td>21-3-2010</td>
														<td>21-3-2018</td>
														<td>24</td>
														<td>8 yrs</td>
													</tr>
													<tr>
														<td>4</td>
														<td>Sean Lawrence</td>
														<td>Jr.Developer</td>
														<td>25-8-2015</td>
														<td>25-8-2015</td>
														<td>10</td>
														<td>3 yrs</td>
													</tr>
													<tr>
														<td>5</td>
														<td>Oliver Welch</td>
														<td>HR</td>
														<td>15-10-2012</td>
														<td>15-10-2018</td>
														<td>20</td>
														<td>6 yrs</td>
													</tr>
												</table>
											</div>
										</div>
									</div>
								</div>

                </div>
            </div>
        )
    }
}
