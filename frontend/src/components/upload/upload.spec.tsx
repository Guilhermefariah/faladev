import { screen, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { expect } from "vitest";

import { Upload } from "."

import { FormStateChecker, renderWithFormProvider } from "@/test-utils";

const ZERO = 0;
describe('Upload Component',()=>{
    beforeEach(()=>{
        renderWithFormProvider(
            <>
                <Upload name="upload" />
                <FormStateChecker name="upload" />
            </>
            )
        })
    it("should render the component without photo",()=>{       
        const formState = screen.getByTestId("form-state"); 
        expect(screen.getByAltText("person unknow")).toBeInTheDocument();
        expect(formState.textContent).toBe('');
    })
    it("should handle file upload", async()=>{
        const inputUpload = screen.getByLabelText<HTMLInputElement>(/upload file/i);
        const file = new File(['hello'], 'hello.png', {type: 'image/png'})
        expect(inputUpload).toBeInTheDocument();
        userEvent.upload(inputUpload,file);
        await waitFor(() => {
            expect(inputUpload.files?.[ZERO]).toStrictEqual(file);
            expect(inputUpload.files?.item(ZERO)).toStrictEqual(file);
            expect(inputUpload.files).toHaveLength(1)           
          });
    })
    it("should handle image removal", async()=>{
        const inputUpload = screen.getByLabelText<HTMLInputElement>(/upload file/i);
        const file = new File(['hello'], 'hello.png', {type: 'image/png'})
        userEvent.upload(inputUpload,file);  
        await waitFor(()=>{
            expect(screen.getByAltText("photo preview")).toBeInTheDocument();
        })
    })
})