import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editUserProfile } from '../../features/userLogin/userSlice'

/**
 * @description Editprofile component allow us to modify the user's firtname and lastname.
 * @returns HTMLElement
 */
const EditProfile = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.user)

    const [isEdit, setIsEdit] = useState(false)
    const [newFirstName, setNewFirstName] = useState()
    const [newLastName, setNewLastName] = useState()

    const firstName = state.firstName
    const lastName = state.lastName
    const token = state.loginToken

    const handelShowEditProfile = () => {setIsEdit(!isEdit)}

    const handelSubmitNewProfile = (e) => {
        e.preventDefault()
        if (newFirstName || newLastName) {
            dispatch(editUserProfile({token, newFirstName, newLastName}))
            setIsEdit(!isEdit)
        }
    }

    const handelCancelProfile = () => {setIsEdit(!isEdit)}

    return (
        <>
            <div className="header">
                <h1>Welcome back</h1>
                {isEdit ?
                    <form onSubmit={handelSubmitNewProfile} className="editProfile-content">
                        <div className="edit-form-section">
                            <input type="text"
                
                                id="newFirstName"
                                placeholder={firstName}
                                onChange={(e) => setNewFirstName(e.target.value)} />
                            <input type="text"
                                id="newLastName"
                                placeholder={lastName}
                                onChange={(e) => setNewLastName(e.target.value)} />
                        </div>
                        <button className="edit-btn" type='submit'>Save</button>
                        <button className="edit-btn" type="button" onClick={handelCancelProfile} >Cancel</button>
                    </form>
                    :
                    <div>
                        <h1>{firstName} {lastName}!</h1>
                        <button onClick={handelShowEditProfile} className="edit-button">Edit Name</button>
                    </div>
                }
            </div>
        </>
    )
}

export default EditProfile
